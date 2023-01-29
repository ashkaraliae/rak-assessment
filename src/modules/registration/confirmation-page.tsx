import { CloudUpload, PhotoCamera } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  Fab,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { RAK_COLORS } from "../../rak-colors";
import { FormLabelText, LabelValue } from "../../shared/form/form-components";
import SignatureCanvas from "react-signature-canvas";

import {
  activeStepAtom,
  defaultOfficeInfo,
  defaultPersonalInfo,
  formDirectionAtom,
  officeInfoAtom,
  personalInfoFormAtom,
} from "./atom/registration-atom";
import { PERSONAL_INFO_SCHEMA } from "./personal-info";
import { OFFICE_INFO_SCHEMA } from "./office-info";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const ConfirmationPage = () => {
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formDirection, setFormDirection] = useRecoilState(formDirectionAtom);
  const [personalInfo, setPersonalInfo] = useRecoilState(personalInfoFormAtom);
  const [officeInfo, setOfficeInfo] = useRecoilState(officeInfoAtom);
  const [signData, setSignData] = useState(null);
  const [imageData, setImageData] = useState<string>("");
  const [openCamera, setOpenCamera] = useState<boolean>(false);
  const signCanvas = useRef<any>({});
  const webcamRef = useRef<any>({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setImageData(pictureSrc);
    setOpenCamera(false);
  }, []);
  const handleSubmit = () => {
    setLoading(true);
    // Based on the random number, mocking API call to show error handling and re-try mechanism.
    // Giving provision to re-try in case any error happens during the api call
    let rnd = Math.floor(Math.random() * 10) % 2;
    setTimeout(() => {
      setLoading(false);
      if (rnd === 0) {
        // const reqBody = {
        //   personalInfo,
        //   officeInfo,
        //   profileImage: imageData,
        //   userSignature: signData
        // };
        // const response = axios.post('app/svc/saveApplication', reqBody);
        // if(response.message === 'success'){
        //  setPersonalInfo({});
        //  setOfficeInfo({});
        //  setActiveStep((activeStep) => activeStep + 1);
        // }
        // else{
        //   setErrorMessage(
        //     "Error while submitting the application, please try again."
        //   );
        // }

        //Clearing the forms after submitting the application successfully
        setPersonalInfo(defaultPersonalInfo);
        setOfficeInfo(defaultOfficeInfo);
        setActiveStep((activeStep) => activeStep + 1);
      } else {
        setErrorMessage(
          "Error while submitting the application, please try again."
        );
      }
    }, 2000);
  };

  const handleGoBack = () => {
    // Setting form direction show the form animation properly(towards right of left)
    setFormDirection("+");
    setActiveStep((activeStep) => activeStep - 1);
  };
  const clearSign = () => {
    signCanvas.current.clear();
    setSignData(null);
  };
  const captureSign = () => {
    setSignData(signCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  const handleUploadFile = (event: any) => {
    setImageData(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Slide direction="left" in={activeStep === 2} mountOnEnter unmountOnExit>
      {loading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <CircularProgress size={120} />
          <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
            Your application is being submitted
          </Typography>
        </Grid>
      ) : (
        <Grid container direction="column">
          {/* Showing alert message if any error occurred while submitting the application */}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Grid container item sx={{ padding: "32px 64px" }}>
            {/* Opening webcamera on Alert for smoother user experience */}
            <Dialog open={openCamera}>
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                width={400}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
              <DialogActions>
                <Button size="small" variant="contained" onClick={capture}>
                  Capture
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setOpenCamera(false)}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>

            {/* Grid for the personal info captured from form --> */}
            <Grid container item xs={4} spacing={4} direction="column">
              {PERSONAL_INFO_SCHEMA.map((formItem: any, index) => (
                <Grid item>
                  <LabelValue
                    key={index}
                    label={formItem.label}
                    value={personalInfo[formItem.field]}
                  />
                </Grid>
              ))}
            </Grid>
            {/* Grid for the office info captured from the form ---> */}
            <Grid container item xs={4} spacing={4} direction="column">
              {OFFICE_INFO_SCHEMA.map((formItem: any, index) => (
                <Grid item>
                  <LabelValue
                    key={index}
                    label={formItem.label}
                    value={officeInfo[formItem.field]}
                  />
                </Grid>
              ))}
            </Grid>
            {/* Grid for the photo upload and signature starts here ---> */}
            <Grid
              container
              item
              xs={4}
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                xs
                sx={{
                  border: `1px solid ${RAK_COLORS.borderGrey}`,
                  borderRadius: 8,
                  marginBottom: 2,
                  padding: 2,
                  backgroundColor: RAK_COLORS.background,
                }}
                justifyContent="center"
                alignItems="center"
              >
                {/* Captured image goes here */}
                <Grid item xs={4}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      border: `1px solid ${RAK_COLORS.borderGrey}`,
                      boxShadow: `1px 1px 2px ${RAK_COLORS.borderGrey}`,
                    }}
                    src={imageData}
                  />
                </Grid>
                <Grid container item direction="column" xs={4} spacing={2}>
                  {/* capture using camera */}
                  <Grid item xs={2}>
                    <Fab component="span">
                      <PhotoCamera
                        sx={{
                          width: 32,
                          height: 32,
                          color: RAK_COLORS.primaryRed,
                        }}
                        onClick={() => setOpenCamera(true)}
                      />
                    </Fab>
                  </Grid>
                  <Grid item xs={2}>
                    {/* For uploading the image */}
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={handleUploadFile}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="contained-button-file">
                      <Fab component="span">
                        <CloudUpload
                          sx={{
                            width: 32,
                            height: 32,
                            color: RAK_COLORS.primaryRed,
                          }}
                        />
                      </Fab>
                    </label>
                  </Grid>
                </Grid>
              </Grid>
              {/* Grid for the signature capture canvas */}
              <Grid
                container
                item
                xs
                direction="column"
                sx={{
                  border: `1px solid ${RAK_COLORS.borderGrey}`,
                  borderRadius: 8,
                  padding: 1,
                  backgroundColor: RAK_COLORS.background,
                }}
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs>
                  <FormLabelText label="Please sign here." />
                </Grid>
                <Grid
                  item
                  xs
                  sx={{
                    border: `1px dotted ${RAK_COLORS.borderGrey}`,
                    borderRadius: 8,
                    width: "90%",
                    backgroundColor: "white",
                  }}
                >
                  <SignatureCanvas ref={signCanvas} />
                </Grid>
                <Grid item>
                  <Button
                    sx={{ marginRight: 2 }}
                    variant="outlined"
                    size="small"
                    onClick={clearSign}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={captureSign}
                  >
                    Ok
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ marginBottom: 4 }}
          >
            <Grid item>
              <Button variant="outlined" onClick={handleGoBack}>
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!imageData || !signData}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Slide>
  );
};
export default ConfirmationPage;

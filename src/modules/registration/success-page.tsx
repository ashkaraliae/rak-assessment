import { Done } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { RAK_COLORS } from "../../rak-colors";
import { activeStepAtom } from "./atom/registration-atom";

const SuccessPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  const handleGoHome = () => {
    setActiveStep(0);
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        sx={{
          border: `6px solid ${RAK_COLORS.greenishWhite}`,
          borderRadius: "50%",
        }}
      >
        <Done sx={{ fontSize: 100, color: RAK_COLORS.lightGreen }} />
      </Grid>
      <Grid item>
        <Typography
          sx={{ color: RAK_COLORS.darkGrey, fontSize: 40, fontWeight: 700 }}
        >
          Success
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: RAK_COLORS.darkGrey, fontSize: 30 }}>
          Your application has been submitted.
        </Typography>
      </Grid>
      <Grid item sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          size="large"
          sx={{ padding: "8px 48px", fontSize: 30 }}
          onClick={handleGoHome}
        >
          OK
        </Button>
      </Grid>
    </Grid>
  );
};

export default SuccessPage;

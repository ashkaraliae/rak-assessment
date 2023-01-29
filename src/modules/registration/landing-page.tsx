import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { RAK_COLORS } from "../../rak-colors";
import { activeStepAtom } from "./atom/registration-atom";
import OfficeInfo from "./office-info";
import PersonalInfo from "./personal-info";
import { StylesType } from "../common/common-types";
import ConfirmationPage from "./confirmation-page";
import SuccessPage from "./success-page";

const styles: StylesType = {
  formContainer: {
    border: `2px dashed ${RAK_COLORS.borderGrey}`,
    borderRadius: 8,
    padding: 2,
    backgroundColor: "white",
    height: "100%",
    overflow: "overlay",
  },
};

// Rendering the form/confirmation page based on the active step input
const FORM_MAP: Record<number, any> = {
  0: <PersonalInfo />,
  1: <OfficeInfo />,
  2: <ConfirmationPage />,
  3: <SuccessPage />,
};

const LandingPage = () => {
  const activeStep = useRecoilValue(activeStepAtom);
  return (
    <Grid
      container
      sx={styles.formContainer}
      alignItems="center"
      justifyContent="center"
    >
      {FORM_MAP[activeStep]}
    </Grid>
  );
};
export default LandingPage;

import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useRecoilValue } from "recoil";
import { activeStepAtom } from "./atom/registration-atom";

const RegistrationProgress = () => {
  const activeStep = useRecoilValue(activeStepAtom);
  return (
    <Box sx={{ padding: 4 }}>
      <Stepper activeStep={activeStep}>
        <Step completed={activeStep > 0}>
          <StepLabel>Personal Info</StepLabel>
        </Step>
        <Step completed={activeStep > 1}>
          <StepLabel>Office Details</StepLabel>
        </Step>
        <Step completed={activeStep > 2}>
          <StepLabel>Confirmation Page</StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};

export default RegistrationProgress;

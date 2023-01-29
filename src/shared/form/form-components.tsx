import { Grid, Typography } from "@mui/material";
import { RAK_COLORS } from "../../rak-colors";

interface LabelValueProps {
  label: string;
  value?: string;
}

export const FormLabelText = ({ label }: LabelValueProps) => (
  <Typography sx={{ color: RAK_COLORS.borderGrey, marginLeft: -2 }}>
    {label}
  </Typography>
);

export const LabelValue = ({ label, value }: LabelValueProps) => (
  <Grid container item spacing={4}>
    <Grid item>
      <FormLabelText label={label + " :"} />
    </Grid>
    <Grid item>
      <Typography>{value}</Typography>
    </Grid>
  </Grid>
);

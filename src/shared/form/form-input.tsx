import { TextField, TextFieldProps } from "@mui/material";
import { RAK_COLORS } from "../../rak-colors";

const FormInput = (props: TextFieldProps) => (
  <TextField
    {...props}
    variant="outlined"
    sx={{ backgroundColor: RAK_COLORS.whitePrimary }}
  />
);

export default FormInput;

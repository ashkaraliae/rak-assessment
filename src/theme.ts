import { createTheme } from "@mui/material/styles";
import { RAK_COLORS } from "./rak-colors";

const theme = createTheme({
  palette: {
    background: {
      default: "#faf7f7",
      paper: "#d9d2d2",
    },
    primary: {
      main: "#d71921",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          paddingTop: "20px",
          paddingBottom: "10px",
          fontSize: "14px",
          fontWeight: 600,
          backgroundColor: "#efedf0",
          borderColor: "yellowgreen",
        },
        notchedOutline: {
          // borderWidth: "2px",
          borderColor: RAK_COLORS.darkGrey,
        },
        focused: {
          borderColor: "green",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: RAK_COLORS.errorRed,
          position: "absolute",
          bottom: "-22px",
        },
      },
    },
  },
});

export default theme;

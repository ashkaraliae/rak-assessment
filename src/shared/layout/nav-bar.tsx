import { Grid, Typography } from "@mui/material";
import { RAK_COLORS } from "../../rak-colors";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <Grid container sx={{}} justifyContent="flex-end">
      <Grid
        container
        item
        xs={4}
        sx={{
          backgroundColor: RAK_COLORS.primaryRed,
          padding: 1,
          borderBottomLeftRadius: 16,
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={3} sx={{ color: RAK_COLORS.whitePrimary }}>
          <Typography sx={{ fontSize: 12 }}>USER</Typography>
        </Grid>
        <Grid item xs={1}>
          <MenuIcon sx={{ color: RAK_COLORS.whitePrimary }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NavBar;

import Box from "@mui/material/Box";
import { RAK_COLORS } from "../../rak-colors";
import { StylesType } from "../common/common-types";
import LandingPage from "../registration/landing-page";
import RegistrationProgress from "../registration/registration-progress";

const styles: StylesType = {
  container: {
    backgroundColor: RAK_COLORS.background,
    padding: 6,
    height: "75vh",
  },
};
const Home = () => {
  return (
    <>
      <RegistrationProgress />
      <Box data-testid="home-page" sx={styles.container}>
        <LandingPage />
      </Box>
    </>
  );
};
export default Home;

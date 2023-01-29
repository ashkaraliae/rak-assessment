import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import Home from "./modules/home/home";
import NavBar from "./shared/layout/nav-bar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <NavBar />
        <Home />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;

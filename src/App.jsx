import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  return (
    <>
      <Header />
      <Container>
        <SwitchTheme />
        <Outlet />
      </Container>
    </>
  );
}

export default App;

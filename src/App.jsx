import { Box, Container, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import { darkTheme, lightTheme } from "./theme/theme";
import { CssBaseline } from "@mui/material";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Header />
      <Box
        sx={{
          bgcolor: "background.body",
          minHeight: "100vh",
          transition: "all 0.2s",
        }}
      >
        <Container>
          <SwitchTheme value={isDarkMode} setValue={setIsDarkMode} />
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

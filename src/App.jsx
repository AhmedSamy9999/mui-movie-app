import { Box, Container, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import { darkTheme, lightTheme } from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { SearchContextProvider } from "./contexts/SearchContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme>
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
            <SearchContextProvider>
              <Outlet />
            </SearchContextProvider>
          </Container>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

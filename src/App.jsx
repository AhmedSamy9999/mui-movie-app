import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  createTheme,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";
import { SearchContextProvider } from "./contexts/SearchContext";
import { FavListContextProvider } from "./contexts/FavListContext";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import useMediaQuery from "@mui/material/useMediaQuery";
import { lightTheme, darkTheme } from "./theme/theme.js";

function App() {
  const [themeType, setThemeType] = useState(
    localStorage.getItem("theme") || "system"
  );

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const systemTheme = React.useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
        ...(prefersDarkMode ? darkTheme : lightTheme),
      }),
    [prefersDarkMode]
  );

  const themes = {
    system: systemTheme,
    dark: darkTheme,
    light: lightTheme,
  };

  useEffect(() => {
    localStorage.setItem("theme", themeType);
  }, [themeType]);

  const [mode, setMode] = useState("system");
  const handleMode = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  return (
    <ThemeProvider theme={themes[themeType]}>
      <CssBaseline enableColorScheme>
        <Header />
        <Box
          sx={{
            bgcolor: "background.body",
            minHeight: "100vh",
            transition: "all 0.3s",
          }}
        >
          <Container>
            <ToggleButtonGroup
              variant="outlined"
              color="primary"
              aria-label="outlined button group"
              value={mode}
              exclusive
              onChange={handleMode}
              sx={{ my: "20px", borderRadius: "12px" }}
            >
              <ToggleButton
                sx={{ borderRadius: "12px" }}
                value="dark"
                aria-label="dark"
                onClick={() => setThemeType("dark")}
              >
                <DarkModeOutlinedIcon sx={{ marginRight: "8px" }} />
                Dark
              </ToggleButton>
              <ToggleButton
                sx={{ borderRadius: "12px" }}
                value="system"
                aria-label="system"
                onClick={() => setThemeType("system")}
              >
                <SettingsBrightnessIcon sx={{ marginRight: "8px" }} />
                System
              </ToggleButton>
              <ToggleButton
                sx={{ borderRadius: "12px" }}
                value="light"
                aria-label="light"
                onClick={() => setThemeType("light")}
              >
                <LightModeIcon sx={{ marginRight: "8px" }} />
                Light
              </ToggleButton>
            </ToggleButtonGroup>
            <SearchContextProvider>
              <FavListContextProvider>
                <Outlet />
              </FavListContextProvider>
            </SearchContextProvider>
          </Container>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

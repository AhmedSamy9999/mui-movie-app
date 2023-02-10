import { createTheme } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";
import { darkModePalette, lightModePalette } from "./palette";
import { lightShadows } from "./shadows";

export const lightTheme = createTheme({
  palette: lightModePalette,
});

export const darkTheme = createTheme({
  palette: darkModePalette,
  shadows: lightShadows,
});

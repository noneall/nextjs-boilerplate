import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = (paletteMode: PaletteMode = "light") => {
  return createTheme({
    palette: {
      mode: paletteMode,
    },
  });
};

export default theme;

import { createTheme } from "@mui/material";
import { COLORS } from "./styles";

export const GLOBAL_THEME = createTheme({
  palette: {
    background: {
      default: COLORS.GREY_BACKGROUND,
    }
  },
});
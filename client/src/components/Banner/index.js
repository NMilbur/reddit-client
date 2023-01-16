import { AppBar, Toolbar } from "@mui/material";

const Banner = ({ children }) => (
  <>
    <AppBar position="fixed">
      <Toolbar>{children}</Toolbar>
    </AppBar>
    <Toolbar />
  </>
);

export default Banner;

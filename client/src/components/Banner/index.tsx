import { AppBar, Toolbar } from "@mui/material";
import { ReactNode } from "react";

interface BannerProps {
  children?: ReactNode;
}

const Banner = ({ children }: BannerProps) => (
  <>
    <AppBar position="fixed">
      <Toolbar>{children}</Toolbar>
    </AppBar>
    <Toolbar />
  </>
);

export default Banner;

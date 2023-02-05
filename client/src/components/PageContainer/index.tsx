import { Box, Container } from "@mui/material";
import Banner from "components/Banner";
import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  containerProps?: any;
  fullPage?: boolean;
  maxWidth?: string;
}

const PageContainer = (
  {
    children,
    containerProps,
    fullPage = false,
    maxWidth = "xl"
  }: PageContainerProps
) => (
  <Box
    display="flex"
    flexDirection="column"
    pb={10}
  >
    <Banner />
    <Box display="flex" flexGrow={1}>
      <Container
        component={Box}
        flexGrow={1}
        py={2}
        maxWidth={fullPage ? false : maxWidth}
        {...containerProps}
      >
        {children}
      </Container>
    </Box>
  </Box>
);

export default PageContainer;

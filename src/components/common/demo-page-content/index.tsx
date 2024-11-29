import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IDemoPageContentProps } from "./demo-page-content.type";

export const DemoPageContent: React.FC<IDemoPageContentProps> = ({
  pathname,
}) => {
  return (
    <>
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography>Dashboard content for {pathname}</Typography>
      </Box>
    </>
  );
};

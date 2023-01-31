import { Typography } from "@mui/material";
import React, { FC } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export const H4Typography: FC<ChildrenProps> = ({ children }) => {
  return (
    <Typography variant="h4" sx={{ textAlign: "center", mt: 6, mb: 6 }}>
      {children}
    </Typography>
  );
};

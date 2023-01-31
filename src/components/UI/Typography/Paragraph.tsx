import { Paper, Typography } from "@mui/material";
import { FC } from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export const Paragraph: FC<ChildrenProps> = ({ children }) => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography paragraph textAlign="justify">
        {children}
      </Typography>
    </Paper>
  );
};

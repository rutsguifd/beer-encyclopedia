import { Typography } from "@mui/material";
import React, { FC } from "react";

interface SearchErrorProps {
  error: string;
}

const SearchError: FC<SearchErrorProps> = ({ error }) => {
  return (
    <Typography variant="h5">Looks Like An Error Ocurred: {error}</Typography>
  );
};

export default SearchError;

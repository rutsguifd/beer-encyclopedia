import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";
import React, { FC } from "react";
import { Theme } from "../../UiConfig/theme";
import SearchIcon from "@mui/icons-material/Search";

const Search: FC = () => {
  const Search = styled("div")(() => ({
    position: "relative",
    borderRadius: Theme.shape.borderRadius,
    backgroundColor: alpha(Theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(Theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [Theme.breakpoints.up("sm")]: {
      marginLeft: Theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: Theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: Theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${Theme.spacing(4)})`,
      transition: Theme.transitions.create("width"),
      width: "100%",
      [Theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default Search;

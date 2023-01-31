import { FC } from "react";
import CustomSearch from "./CustomSearch";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavbarMenu from "./NavbarMenu";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavbarMenu />
        <CustomSearch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

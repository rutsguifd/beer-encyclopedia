import React, { FC, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import classes from "./styles/Header.module.css";
import SportsBarOutlinedIcon from "@mui/icons-material/SportsBarOutlined";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useColorMode } from "../UiConfig/ColorModeContextProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { pages } from "../utils/navbarMenuPages";

const NavbarMenu: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <>
      {/* Desktop Device */}
      <SportsBarOutlinedIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Link className={classes.link} to="/beer-encyclopedia">
          BEER ENCYCLOPEDIA |
        </Link>
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Typography
            variant="button"
            key={page.pageName}
            onClick={handleCloseNavMenu}
            sx={{ m: 2, color: "white", display: "block" }}
          >
            <Link className={classes.link} to={page.pageRoute}>
              {page.pageName}
            </Link>
          </Typography>
        ))}
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
      {/* Mobile Device */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link className={classes.link} to={page.pageRoute}>
                  {page.pageName}
                </Link>
              </Typography>
            </MenuItem>
          ))}
          <MenuItem>
            <Typography
              alignItems="center"
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <>
                  GO <strong>"LIGHT"</strong>
                </>
              ) : (
                <>
                  GO <strong>"DARK"</strong>
                </>
              )}
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <Link className={classes.link} to="/beer-encyclopedia">
        <SportsBarOutlinedIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        />
      </Link>
    </>
  );
};

export default NavbarMenu;

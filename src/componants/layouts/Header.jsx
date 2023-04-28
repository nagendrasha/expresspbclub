import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { dark } from "@mui/material/styles/createPalette";
import Logo from "../media/logo.jpg"

// import { ThemeProvider } from "@mui/material/styles";
// import { customTheme } from "../../theme";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor:"black" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="" width="200px" />
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <Button color="inherit">Login</Button>
            <Button
              variant="contained"
              color="warning"
              startIcon={<PersonOutlineIcon />}
            >
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

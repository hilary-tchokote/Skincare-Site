import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-red-200 w-full">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Skincare by Tich
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
              <Tab value="three" label="Item Three" />
              <Tab icon={<LanguageIcon />} label="Language" />
              <Tab icon={<ShoppingCartIcon />} label="Cart" />
              <Tab icon={<LoginIcon />} label="Login" />
            </Tabs>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
            <TextField
              id="search-bar"
              label="Search Products"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Item One</MenuItem>
        <MenuItem onClick={handleClose}>Item Two</MenuItem>
        <MenuItem onClick={handleClose}>Item Three</MenuItem>
        <MenuItem onClick={handleClose}>Language</MenuItem>
        <MenuItem onClick={handleClose}>Cart</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </Menu>
    </Box>
  );
}

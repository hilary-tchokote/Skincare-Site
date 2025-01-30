import * as React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LoginPopIn from "./loginPopIn";
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
//import Select from "@mui/material/Select";

export default function Navbar({ setIsCartOpen, cart }) {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const totalItems = cart?.reduce((acc, product) => acc + product.amount, 0) || 0;
  const [isLoginPopInOpen, setIsLoginPopInOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fonction pour changer la langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "salmon" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <Box sx={{ display: { xs: "none", md: "flex" } }}> */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Tab value="one" label={t("Item One")} sx={{ minWidth: 120 }} />
              <Tab value="two" label={t("Item Two")} sx={{ minWidth: 120 }} />
              <Tab
                value="three"
                label={t("Item Three")}
                sx={{ minWidth: 120 }}
              />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                alignSelf: "center",
                marginLeft: 4,
                flexGrow: 1,
                color: "white",
              }}
            >
              <p> Skincare by Tich </p>
            </Typography>
            <Box
              sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
            >
              <Tab
                icon={<LanguageIcon />}
                //label={t("language")}
                label={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <select
                      onChange={(e) => changeLanguage(e.target.value)}
                      defaultValue="en"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "white",
                        fontSize: "14px",
                        cursor: "pointer",
                        outline: "none",
                        paddingLeft: "8px",
                      }}
                    >
                      {/* <MenuItem value="en" label="English">
                        🇺🇸
                      </MenuItem>
                      <MenuItem value="fr" label="Français">
                      🇫🇷
                      </MenuItem>
                      <MenuItem value="es" label="Español">
                      🇪🇸
                      </MenuItem> */}
                      <option value="en"> </option>
                       <option value="fr">🇫🇷 </option>
                      <option value="es">🇪🇸 </option> 
                      <option value="en">🇺🇸 </option>
                    </select>
                  </div>
                }
                sx={{
                  minWidth: 150,
                  textAlign: "center",
                }}
              />

              <Tab
                icon={
                  <div style={{ position: "relative" }}>
                    <ShoppingCartIcon />
                    {totalItems > 0 && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-5px",
                          right: "-10px",
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: "50%",
                          padding: "5px 8px",
                          fontSize: "12px"
                        }}
                      >
                        {totalItems}
                      </span>
                    )}
                  </div>
                }
                label={t("cart")}
                sx={{ minWidth: 120 }}
                onClick={() => setIsCartOpen(true)}
              />
              <Tab
                icon={<LoginIcon />}
                //label={t("login")}
                sx={{ minWidth: 120 }}
                onClick={() => setIsLoginPopInOpen(true)}
              />
               <LoginPopIn 
                 isOpen={isLoginPopInOpen}
                 onClose={() => setIsLoginPopInOpen(false)}
                />
            </Box>
          </Tabs>
          {/* </Box> */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
            <TextField
              id="search-bar"
              label={t("search_products")}
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

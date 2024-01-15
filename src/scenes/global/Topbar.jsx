import React, { useState } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    // Perform actions based on the selected menu item (e.g., navigate to a page)
    console.log("Selected action:", action);

    // Close the menu
    handleMenuClose();
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ICONS */}
      <Box display="flex" marginLeft="auto">
        <IconButton
          sx={{ mb: 4, color: "#02888B" }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton sx={{ mb: 4, color: "#02888B", fontSize: "19px" }}>
          <NotificationsOutlinedIcon />
        </IconButton>

        <Box mb="25px" display="flex" alignItems="center">
          <Box>
            <img
              alt="profile-user"
              width="50px"
              height="50px"
              src={`../../assets/user1.png`}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center" marginLeft="15px">
            <Typography
              variant="h4"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              Musa Ahmed
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Super Admin
            </Typography>
          </Box>
          <IconButton
            aria-label="more"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            sx={{ color: colors.grey[100], marginLeft: "auto" }}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleMenuItemClick("updateProfile")}>
              Update Profile
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("settings")}>
              Settings
            </MenuItem>
            {/* Add more menu items as needed */}
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;

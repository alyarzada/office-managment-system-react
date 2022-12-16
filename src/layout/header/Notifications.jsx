import React, { useState, useRef } from "react";
import { Box, IconButton, MenuItem, Typography, Badge } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomMenu from "../../components/UI/CustomMenu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

export default function Notifications() {
  const [openMenu, setOpenMenu] = useState(false);
  const { light } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const btnRef = useRef(null);

  const handleClick = () => setOpenMenu((prev) => !prev);

  return (
    <Box className="relative">
      <IconButton ref={btnRef} onClick={handleClick}>
        <Badge badgeContent={events.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      {openMenu ? (
        <CustomMenu
          className="absolute"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          ref={btnRef}
          top="top-11"
        >
          {events.length > 0 ? (
            events.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  navigate("/notifications");
                  setOpenMenu(false);
                }}
              >
                <LightbulbOutlinedIcon className="text-xl" />
                <Box>
                  <Typography className="font-semibold text-sm ">
                    {item?.title}
                  </Typography>
                  <span className="text-xs">5 min ago</span>
                </Box>
              </MenuItem>
            ))
          ) : (
            <Box className="p-3">
              <Typography>Bildiriş yoxdur!</Typography>
            </Box>
          )}
        </CustomMenu>
      ) : null}
    </Box>
  );
}

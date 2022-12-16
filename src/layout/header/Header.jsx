import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Settings } from "../sidebar/Settings";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { useTranslation } from "react-i18next";
import { Box, IconButton } from "@mui/material";

import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

const Header = ({ setOpenSubMenu, openSubMenu }) => {
  const { openedSidebar, light, boxed } = useSelector((state) => state.themes);
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <header
      className={`flex top-0 px-5 transition-all ease-in-out duration-300 h-[70px] z-30 ${
        openedSidebar
          ? "left-0 md:left-[250px] header-width-open"
          : "left-0 md:left-[80px] header-width-close"
      } ${
        light
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      } ${boxed ? "absolute" : "fixed"}`}
    >
      <nav className={`flex  items-center w-full justify-between`}>
        <Box className="flex p-4 justify-start items-center gap-x-14 mx-2">
          <IconButton
            className={`cursor-pointer ml-2 absolute left-0 ${
              light ? "text-bgSecond" : "text-text1"
            }`}
            onClick={() => {
              dispatch(setOpenedSidebar());
              setOpenSubMenu(false);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box className="flex items-center gap-x-4">
          <LanguageSwitcher />
          <Notifications />
          <Settings />
          <UserMenu />
        </Box>
      </nav>
    </header>
  );
};

export default Header;

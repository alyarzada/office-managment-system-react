// Tunar

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMediaQuery, List } from "@mui/material";

import { sidebarMenu } from "./sidebar_data";
import SidebarItem from "./SidebarItem";
import logoWithText from "../../assets/sidebar/output-onlinepngtools.png";
import logo from "../../assets/sidebar/pashalogo_dark.png";
import logoDark from "../../assets/sidebar/logo.png";

const SideBar = ({ openSubMenu, setOpenSubMenu }) => {
  const { openedSidebar, leftLight, light } = useSelector(
    (state) => state.themes
  );
  const { i18n, t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <motion.div
      className={`text-sm select-none overflow-x-hidden md:overflow-x-visible h-screen z-10 fixed left-0 top-[70px] md:top-0 ${
        leftLight === "light"
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }`}
      animate={
        matches
          ? { x: openedSidebar ? "0" : "-100%", width: "250px" }
          : { width: openedSidebar ? "250px" : "80px" }
      }
      transition={{ type: "spring", duration: 1 }}
    >
      {/* sidebar logo */}
      <div className="mt-3 h-16" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/" className="pl-4 block">
          {leftLight === "light" ? (
            <img
              className={openedSidebar && "w-[66%]"}
              alt="logo"
              src={openedSidebar ? logoDark : logo}
            />
          ) : (
            <img
              className={!openedSidebar && "w-12"}
              alt="logo"
              src={openedSidebar ? logoWithText : logo}
            />
          )}
        </Link>
      </div>
      {/* sidebar nav */}
      <nav className="sidebar-nav">
        <List>
          {sidebarMenu.map((sidebarItem, index) => {
            const Icon = sidebarItem.icon;
            return (
              <SidebarItem
                key={index}
                openSubMenu={openSubMenu}
                setOpenSubMenu={setOpenSubMenu}
                sidebarItem={sidebarItem}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </List>
      </nav>
    </motion.div>
  );
};

export default SideBar;

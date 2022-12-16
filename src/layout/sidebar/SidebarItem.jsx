// Tunar
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { useMediaQuery, Box, ListItem } from "@mui/material";
import ProjectsSubmenuItem from "./ProjectsSubmenuItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SidebarItem = ({
  sidebarItem,
  index,
  Icon,
  setOpenSubMenu,
  openSubMenu,
}) => {
  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();
  const { light } = useSelector((state) => state.themes);
  const { openedSidebar } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);
  const { i18n, t } = useTranslation();
  const linkRef = useRef(null);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (openSubMenu) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [openSubMenu]);

  return (
    <li
      key={index}
      className={`text-gray-400 ${!openedSidebar && "group relative"}`}
    >
      <Link
        className={`hover:text-text1 flex gap-x-3 shrink-0 flex-nowrap basis-0 whitespace-nowrap items-center py-3  ${
          openedSidebar
            ? "text-text2 group hover-effect rounded w-[90%] mx-auto px-4"
            : "relative group px-7"
        }`}
        to={sidebarItem.path ? sidebarItem.path : ""}
        onClick={(e) => {
          if (!sidebarItem.path) {
            e.preventDefault();
            if (openedSidebar) setOpenSubMenu(!openSubMenu);
          }
          if (sidebarItem.path) matches && dispatch(setOpenedSidebar());
        }}
      >
        <Icon className="w-[20px] group-hover:text-white" />
        {openedSidebar ? (
          <motion.div
            className="text-[15px] w-full flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {sidebarItem.title[i18n.language]}
            {sidebarItem.title[i18n.language] === t("bildirisler") ? (
              events.length !== 0 ? (
                <span className="py-[0.5px] px-1 text-xs text-center rounded inline-block text-white bg-rose-500">
                  {events.length}
                </span>
              ) : null
            ) : sidebarItem.title[i18n.language] === t("yenitaskyarat") ? (
              <span className="text-xs text-center px-1 rounded inline-block text-[#0acf97] bg-[#0acf972e]">
                Yeni
              </span>
            ) : null}
            {!sidebarItem.path && (
              <ChevronRightIcon
                className={
                  openSubMenu
                    ? "rotate-90 text-white transition-transform duration-500"
                    : "rotate-0 text-white transition-transform duration-500"
                }
              />
            )}
          </motion.div>
        ) : (
          <Box className="text-[15px] opacity-0 invisible -translate-x-5  text-center text-white bg-[#6d2772] w-40 p-3 h-[44px] absolute top-0 left-[85px] rounded group-hover:translate-x-0 group-hover:visible group-hover:ease-out group-hover:opacity-100 group-hover:transition-all group-hover:duration-[400ms]">
            {sidebarItem.title[i18n.language]}
          </Box>
        )}
      </Link>
      <div
        className="transition-all duration-300 overflow-hidden"
        ref={linksContainerRef}
      >
        <ul
          ref={linkRef}
          className={
            !openedSidebar &&
            `invisible fit-content opacity-0 -translate-x-5 ${
              sidebarItem.sublist.length > 0 &&
              "group-hover:visible group-hover:transition-all group-hover:ease-out group-hover:opacity-100 group-hover:duration-[400ms] group-hover:translate-x-0 absolute rounded top-0 left-[85px] w-fit p-2 bg-[#6d2772]"
            }`
          }
        >
          {sidebarItem.sublist.map((sublistItem, index) => {
            const Icon = sublistItem.icon;
            return (
              <ProjectsSubmenuItem
                key={index}
                sublistItem={sublistItem}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default SidebarItem;

// Tunar
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// redux-toolkit
import { useSelector, useDispatch } from "react-redux";
import { setOpenedSidebar } from "../../app/Slicers/themes";
// mui
import useMediaQuery from "@mui/material/useMediaQuery";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProjectsSubmenuItem = ({ sublistItem, index, Icon }) => {
  const dispatch = useDispatch();
  const { openedSidebar } = useSelector((state) => state.themes);
  const { i18n, t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");

  const openProjectsSubmenu = (e) => {
    const item = e.currentTarget.nextElementSibling;
    const arrowIcon = e.currentTarget.lastElementChild;
    if (openedSidebar) {
      if (!item.classList.contains("h-28")) {
        item.classList.add("h-28");
        item.classList.remove("h-0");
        arrowIcon.style.transform = "rotate(90deg)";
        arrowIcon.style.transition = "transform .4s ease";
      } else {
        item.classList.remove("h-28");
        item.classList.add("h-0");
        arrowIcon.style.transform = "rotate(0deg)";
      }

      // collapse others
      const allItems = e.currentTarget.parentElement.parentElement.children;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === e.currentTarget.parentElement) {
          continue;
        }
        allItems[i].lastElementChild.classList.remove("h-28");
        allItems[i].lastElementChild.classList.add("h-0");
        allItems[i].firstElementChild.lastElementChild.style.transform =
          "rotateZ(0deg)";
      }
    }
  };

  const hoverProjectsSubmenu = (e) => {
    const item = e.currentTarget.lastElementChild;
    if (!openedSidebar) {
      if (e._reactName === "onMouseOver") {
        item.classList.add("h-[110px]");
        item.classList.remove("h-0");
      } else if (e._reactName === "onMouseOut") {
        item.classList.remove("h-[110px]");
        item.classList.add("h-0");
      } else {
        console.log("none of them");
      }
    }
  };

  return (
    <li
      key={index}
      className="relative"
      onMouseOver={hoverProjectsSubmenu}
      onMouseOut={hoverProjectsSubmenu}
    >
      <div
        onClick={openProjectsSubmenu}
        className={`${
          openedSidebar
            ? "px-4 group mx-auto w-[90%] hover:bg-[#6d2772] rounded hover:text-white"
            : "w-[173px] pl-[3px]"
        } py-2 flex justify-between cursor-pointer `}
      >
        <span className={`text-[13px] ${!openedSidebar && "text-text1"}`}>
          <Icon className="w-[20px] group-hover:text-white" />
          <span className={`${openedSidebar && "ml-3 align-bottom"}`}>
            {sublistItem.title}
          </span>
        </span>
        <ChevronRightIcon className="text-white" />
      </div>
      <ul
        className={`text-text1 rounded duration-300 overflow-hidden h-0 ${
          openedSidebar
            ? "static"
            : "absolute -top-1 left-[180px] bg-[#6d2772] "
        }`}
      >
        {sublistItem.projects_sublist.map(({ path, title }, index) => (
          <li key={index}>
            <Link
              to={path}
              className={`${
                openedSidebar
                  ? "px-9 py-2 w-[80%] mx-auto hover:bg-[#6d2772] rounded hover:text-white"
                  : "w-28 py-2 pl-3"
              } block`}
              onClick={() => matches && dispatch(setOpenedSidebar())}
            >
              {title[i18n.language]}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectsSubmenuItem;

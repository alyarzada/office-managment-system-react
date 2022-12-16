// Tunar

import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const ProjectsSubmenuItem = ({ sublistItem, index }) => {
  const openProjectsSubmenu = (e) => {
    const item = e.currentTarget.nextElementSibling;
    const arrowIcon = e.currentTarget.lastElementChild.lastElementChild;
    if (!item.classList.contains("h-28")) {
      item.classList.add("h-28");
      item.classList.remove("h-0");
      arrowIcon.style.transform = 'rotateZ(90deg)'
      arrowIcon.style.transition = 'transform .4s ease'
    } else {
      item.classList.remove("h-28");
      item.classList.add("h-0");
      arrowIcon.style.transform = 'rotateZ(0deg)'
    }

    // collapse others
    const allItems = e.currentTarget.parentElement.parentElement.children;
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i] === e.currentTarget.parentElement) {
        continue
      }
      allItems[i].lastElementChild.classList.remove("h-28");
      allItems[i].lastElementChild.classList.add("h-0");
      // arrowIcon.style.transform = 'rotateZ(0deg)'
    }
  };

  return (
    <li key={index}>
      <div
        onClick={openProjectsSubmenu}
        to={sublistItem.path}
        className="pl-8 py-3 block cursor-pointer"
      >
        {sublistItem.icon}
        <span className="ml-2 inline-flex w-[165px] justify-between">
          {sublistItem.title}
          <ChevronRightIcon />
        </span>
      </div>
      <ul className={`duration-300 h-0 overflow-hidden`}>
        {sublistItem.projects_sublist.map((projects_sublist_item, index) => (
          <li key={index}>
            <Link to={projects_sublist_item.path} className="pl-16 py-2 block">
              {projects_sublist_item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectsSubmenuItem;

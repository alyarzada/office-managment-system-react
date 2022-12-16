// Tunar

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

// mui icons
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditLocationAltOutlinedIcon from "@mui/icons-material/EditLocationAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

// data
const controlPanel = [
  {
    path: "/tasks",
    title: "aktivtasklar",
    icon: (
      <PendingActionsOutlinedIcon
        fontSize="large"
        className="group-hover:-translate-y-2 mb-4"
        style={{ transition: "all .3s ease", fontSize: "5rem" }}
      />
    ),
  },
  {
    path: "/newtask",
    title: "yenitaskyarat",
    icon: (
      <AddCommentOutlinedIcon
        className="group-hover:-translate-y-2 mb-4"
        style={{ transition: "all .3s ease", fontSize: "5rem" }}
      />
    ),
  },
  {
    path: "/newproject",
    title: "yenilayiheyarat",
    icon: (
      <AddCircleOutlineIcon
        fontSize="large"
        className="group-hover:-translate-y-2 mb-4"
        style={{ transition: "all .3s ease", fontSize: "5rem" }}
      />
    ),
  },
  {
    path: "/projects",
    title: "layiheler",
    icon: (
      <EditLocationAltOutlinedIcon
        fontSize="large"
        className="group-hover:-translate-y-2 mb-4"
        style={{ transition: "all .3s ease", fontSize: "5rem" }}
      />
    ),
  },
  {
    path: "/groups-users",
    title: "istifadeciler",
    icon: (
      <PeopleAltOutlinedIcon
        fontSize="large"
        className="group-hover:-translate-y-2 mb-4"
        style={{ transition: "all .3s ease", fontSize: "5rem" }}
      />
    ),
  },
  {
    path: "/archive",
    title: "arxiv",
    icon: (
      <ArchiveOutlinedIcon
        fontSize="large"
        className="group-hover:-translate-y-2 mb-4"
        style={{ transition: "all .3s ease", fontSize: "5rem" }}
      />
    ),
  },
];

const ControlPanelHeader = () => {
  const { light } = useSelector((state) => state.themes);
  const { i18n, t } = useTranslation();

  return (
    <Box>
      <h1
        className={`${
          light ? "text-[#6c757d]" : "text-slate-50"
        } font-semibold text-lg mb-3`}
      >
        {t("nezaretpaneli")}
      </h1>
      <Box className="text-center grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {controlPanel.map((item, index) => (
          <Box
            key={index}
            className={`${
              light
                ? "bg-bgLight text-textDark drop-shadow-lg hover:drop-shadow-xl"
                : " bg-[#041428] text-white"
            } rounded`}
          >
            <Link to={item.path} className="w-full h-full block p-3 group">
              {item.icon}
              <h5>{t(item.title)}</h5>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ControlPanelHeader;

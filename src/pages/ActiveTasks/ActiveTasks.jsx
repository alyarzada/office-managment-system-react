// Tunar

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import img from "../../assets/avatar-4.jpg";
import TaskActions from "../../data/TaskAction";

// mui icons
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import DataTable from "../../components/UI/data_table";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReplyIcon from "@mui/icons-material/Reply";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

import {
  Box,
  Button,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const tableHeader = [
  {
    field: "taskName",
    headerName: "Taskın adı",
    width: 180,
    renderCell: (params) => (
      <Link to={`/tasks/${params.id}`}>{params.value}</Link>
    ),
  },
  {
    field: "responsiblePeople",
    headerName: "Üzvlər",
    width: 200,
    valueGetter: (params) =>
      params.row.responsiblePeople.map(
        (person, index) => index + ". " + person.label
      ),
  },
  {
    field: "projects",
    headerName: "Layihə",
    width: 200,
    valueGetter: (params) =>
      params.row.projects.map((person, index) => index + ". " + person.label),
  },
  {
    field: "startDate",
    headerName: "Başlama",
    width: 190,
  },
  {
    field: "endDate",
    headerName: "Bitmə",
    width: 190,
  },
  { field: "taskDetails", headerName: "Şərhlər", width: 170, sortable: false },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 190,
    sortable: false,
    renderCell: (params) => <TaskActions {...{ params }} />,
  },
];

export const Tasks = () => {
  const [expanded, setExpanded] = useState(false);
  const { light, disableTransform } = useSelector((state) => state.themes);
  const { tasks } = useSelector((state) => state.tasks);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
      className={`w-full min-h-[80vh] ${
        disableTransform ? "transform-none" : ""
      } `}
    >
      <Box className="flex justify-between items-center">
        <h4
          className={`"font-sans font-semibold text-lg ${
            light ? "text-textDark2" : "text-white"
          }`}
        >
          Tasklar
        </h4>
        <Link to="/newtask">
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            color="success"
            className="capitalize"
          >
            Yeni task
          </Button>
        </Link>
      </Box>

      {/* body */}
      <Box
        className={`my-8 rounded ${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } w-full `}
      >
        <Box className="py-6 px-6">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Noyabr 2
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Aktiv Tasklar
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DataTable rows={tasks} columns={tableHeader} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          className={`flex justify-between items-center gap-x-1 ${
            light ? "bg-bgLight" : "bg-[#404954]"
          } py-5 px-3 sm:px-6 rounded mt-2`}
        >
          <Link to="/">
            <Button
              startIcon={
                <ReplyIcon className={light ? "text-white" : "text-black"} />
              }
              className="capitalize"
              variant="contained"
            >
              {t("geriqayit")}
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

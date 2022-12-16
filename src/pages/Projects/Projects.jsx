//Fuad and Tunar
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { reOrderProjects } from "../../app/Slicers/projects";
import { Button, Box, Alert } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ReplyIcon from "@mui/icons-material/Reply";

import Project from "./Project";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const { projects } = useSelector((state) => state.projects);
  const { light, disableTransform } = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ x: "50%" }}
      animate={{ x: "0" }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Box className="head flex items-center justify-between">
        <h4 className="font-sans font-semibold text-lg text-white">
          {t("layiheler")}
        </h4>
        <Box className="flex gap-x-2">
          <Link to="/">
            <Button
              startIcon={
                <ReplyIcon className={light ? "text-white" : "text-black"} />
              }
              className="capitalize mt-2"
              variant="contained"
            >
              {t("geriqayit")}
            </Button>
          </Link>
          <Link to="/newproject">
            <Button
              startIcon={
                <TaskAltRoundedIcon
                  className={light ? "text-white" : "text-black"}
                />
              }
              className="capitalize mt-2"
              variant="contained"
              color="success"
            >
              {t("yenilayiheyarat")}
            </Button>
          </Link>
        </Box>
      </Box>

      {projects.length > 0 ? (
        <ReactSortable
          list={projects.map((x) => ({ ...x, chosen: true }))}
          animation={400}
          setList={(newState) => dispatch(reOrderProjects(newState))}
          className="grid grid-cols-proje1 lg:grid-cols-proje2 gap-[2.5rem] my-6"
        >
          {projects.map((item) => (
            <Project item={item} key={item.id} />
          ))}
        </ReactSortable>
      ) : (
        <Box className="mt-4">
          <Alert severity="info">Layihə yoxdur</Alert>
        </Box>
      )}
    </motion.div>
  );
};

export default Projects;

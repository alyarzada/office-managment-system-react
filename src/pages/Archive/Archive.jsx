// Tunar

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Box, Button, Typography, Stack, Breadcrumbs } from "@mui/material";
import DataTable from "../../components/UI/data_table";
import img from "../../assets/avatar-4.jpg";

// material ui icons
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const columns = [
  { field: "title", headerName: "Başlıq", width: 200 },
  { field: "comment", headerName: "Ətraflı", width: 500 },

  { field: "dropdown", headerName: "Əməliyyat", width: 200, sortable: false },
  {
    field: "currentDate",
    headerName: "Yaradıldı",
    width: 200,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const breadcrumbs = [
  <Link to="/" underline="hover" key="1" className="text-[#727cf5]">
    Home
  </Link>,
  <Typography key="2" className="text-[#aab8c5] ">
    Task
  </Typography>,
];

const Archive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { light, disableTransform } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);
  const { t } = useTranslation();

  return (
    <motion.div
      className={`w-full ${
        disableTransform ? "transform-none" : "overflow-hidden relative"
      } `}
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between items-center">
        <Box>
          <h4
            className={`font-medium ${light ? "text-textDark2" : "text-white"}`}
          >
            {t("tasklar")}
          </h4>
        </Box>

        <Stack spacing={2}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className="text-linkColor" />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </Box>

      <Box
        className={`my-4 rounded ${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        }  w-full `}
      >
        <Box className="py-6 px-6">
          <DataTable
            rows={events}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
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

export default Archive;

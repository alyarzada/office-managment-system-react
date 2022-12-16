import React, { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { Box, Button } from "@mui/material";

import ReplyIcon from "@mui/icons-material/Reply";

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

const Notifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    <Link underline="hover" key="1" to="/" className="text-[#727cf5] ">
      Ana Səhifə
    </Link>,
    <Typography
      underline="hover"
      key="2"
      className="text-[#aab8c5]"
      to="/notifications"
    >
      Bildirişlər
    </Typography>,
  ];

  const { t } = useTranslation();
  const { light, disableTransform } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);

  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between">
        <h4
          className={`${light ? "text-textDark2" : "text-white"}  font-medium`}
        >
          {t("bildirisler")}
        </h4>
        <Box className="hidden lg:block">
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
      </Box>

      {/* data-table */}
      <Box
        className={`my-4 rounded ${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        }  w-full `}
      >
        <Box className="py-6 px-6" style={{ height: 400, width: "100%" }}>
          <DataGrid
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
              variant="contained"
              className="capitalize"
            >
              {t("geriqayit")}
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Notifications;

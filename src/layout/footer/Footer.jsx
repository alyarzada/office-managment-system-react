import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Footer = () => {
  const { t } = useTranslation();
  const { openedSidebar } = useSelector((state) => state.themes);
  const { light } = useSelector((state) => state.themes);

  return (
    <Box
      className={`${
        light ? "bg-bgLight" : " "
      } py-4 px-2 rounded-sm  text-text2 border-t-solid border-t border-t-text2"`}
    >
      © 2017 - 2022 RahatOfis. {t("copyright")}.
    </Box>
  );
};

export default Footer;

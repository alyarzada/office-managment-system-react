// Tunar
import React from "react";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Button from "@mui/material/Button";

const UsersHeader = ({ setGroupModal, setUserModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { light } = useSelector((state) => state.themes);

  return (
    <Box className="flex flex-col items-center justify-start gap-y-2 xs:justify-between xmd:flex-row">
      <Box className="w-fit">
        <h4
          className={`${light ? "text-textDark2" : "text-white"}  font-medium`}
        >
          {t("qruplaristifadeciler")}
        </h4>
      </Box>

      <Box className="flex gap-2 text-sm">
        <Button
          onClick={() => {
            setGroupModal(true);
          }}
          variant="outlined"
          color="success"
          className=" capitalize p-1 ml-0 sm:px-3"
          startIcon={
            <AddCircleOutlineRoundedIcon
              className={`hidden md:inline ${!light && "text-black"}`}
            />
          }
        >
          {t("yeniqrupyarat")}
        </Button>
        <Button
          variant="contained"
          color="success"
          className=" capitalize p-1 sm:px-3"
          startIcon={
            <AddCircleOutlineRoundedIcon
              className={`hidden md:inline ${
                light ? "text-white" : "text-black"
              }`}
            />
          }
          onClick={() => navigate("/createuser")}
        >
          {t("yeniistifadeciyarat")}
        </Button>
      </Box>
    </Box>
  );
};

export default UsersHeader;

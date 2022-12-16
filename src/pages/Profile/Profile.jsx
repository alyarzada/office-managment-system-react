import React from "react";
import { Breadcrumbs, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar-4.jpg";
import ProfileForm from "./ProfileForm";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FlipCameraIosOutlinedIcon from "@mui/icons-material/FlipCameraIosOutlined";
import ReplyIcon from "@mui/icons-material/Reply";

const Profile = () => {
  const { light, disableTransform } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/">
      Ana sehife
    </Link>,
    <Link underline="hover" key="2" color="inherit" to="/profile">
      Profil
    </Link>,
  ];

  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between ">
        <h4 className="text-white font-semibold">Profil</h4>
        <Box>
          <Breadcrumbs
            className="text-white"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
      </Box>

      <Box className="flex flex-col md:flex-row justify-between mt-4">
        <Box
          className={`${
            light
              ? "bg-bgLight drop-shadow-lg"
              : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
          } p-6 rounded w-full h-[500px]  md:w-[30%]`}
        >
          {/* first row */}
          <Box className="flex flex-col items-center">
            <Box className="relative">
              <img
                className="h-[10rem] w-[10rem] rounded-[50%] bg-red-300 border-4 border-yellow-400"
                src={avatar}
                alt=""
              />
              <Box className="absolute bottom-0 right-2 bg-yellow-400 px-3 py-1 rounded">
                <FlipCameraIosOutlinedIcon
                  fontSize="small"
                  className="m-auto"
                />
              </Box>
            </Box>
            <h4 className="text-text3">Demo User</h4>
            <Typography className="text-text4">Admin</Typography>
          </Box>

          {/* second row */}
          <Box className="mt-5 text-text4">
            <ul>
              <li className="font-bold text-sm my-2">
                Tam ad: <span className="font-normal ml-2 ">Demo User</span>
              </li>
              <li className="font-bold text-sm my-2">
                E-poçt:{" "}
                <span className="font-normal ml-2 ">demo@rahatbina.az</span>
              </li>
              <li className="font-bold text-sm my-2">
                Son giriş tarixi:{" "}
                <span className="font-normal ml-2 ">25 d. əvvəl</span>
              </li>
              <li className="font-bold text-sm my-2">
                Son giriş İP:{" "}
                <span className="font-normal ml-2 ">146.70.57.2</span>
              </li>
              <li className="font-bold text-sm my-2">
                Ölkə: <span className="font-normal ml-2 ">United States</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box
          className={`${
            light
              ? "bg-bgLight drop-shadow-lg"
              : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
          } p-6 rounded w-full md:w-[68%] min-h-[500px]`}
        >
          <ProfileForm />
        </Box>
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
    </motion.div>
  );
};

export default Profile;

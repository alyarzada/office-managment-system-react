// Tunar

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import FileSaver from "file-saver";

import DoneIcon from "@mui/icons-material/Done";
import RefreshIcon from "@mui/icons-material/Refresh";
import PauseIcon from "@mui/icons-material/Pause";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import AreaChartComponent from "./AreaChart";
import StatusBox from "./StatusBox";
import img from "../../assets/avatar-4.jpg";

// data
const statuses = [
  {
    id: 1,
    title: "Gözləmədə",
    icon: <PauseIcon />,
    color: {
      bg: "bg-[#ffbc00]",
      border: "border-[#ffbc00]",
      text: "text-[#ffbc00]",
    },
    hover: "hover:bg-[#ffbc00]",
  },
  {
    id: 2,
    title: "Icra edilir",
    icon: <RefreshIcon />,
    color: {
      bg: "bg-[#39afd1]",
      border: "border-[#39afd1]",
      text: "text-[#39afd1]",
    },
    hover: "hover:bg-[#39afd1]",
  },
  {
    id: 3,
    title: "Tamamlandı",
    icon: <DoneIcon />,
    color: {
      bg: "bg-[#0acf97]",
      border: "border-[#0acf97]",
      text: "text-[#0acf97]",
    },
    hover: "hover:bg-[#0acf97]",
  },
];

const SecondColumn = ({ task }) => {
  const { light } = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  const previewHandler = () => {
    task.files.forEach((file) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        file.preview = reader.result;
      });
      reader.readAsDataURL(file);
    });
  };
  previewHandler();

  return (
    <Box>
      <Box
        className={`${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } rounded mb-3 p-5`}
      >
        <Box className="flex flex-col gap-y-2 md:flex-row mb-5">
          {statuses.map((status) => (
            <StatusBox key={status.id} {...status} />
          ))}
        </Box>

        {/* task info */}
        <Box
          className={`flex justify-between ${
            light ? "text-textDark2" : "text-text3"
          }`}
        >
          <Box className="w-1/2">
            <h5 className="text-textmuted mb-2">Kime tapsirilib</h5>

            <Box className="flex items-center gap-x-2">
              <Box className="text-sm font-semibold">
                {task?.responsiblePeople?.map((person, index) => {
                  return (
                    <Box key={index} className="flex gap-x-2 mb-2">
                      <img
                        src={img}
                        className="block rounded-[50%] w-[25px] h-[25px]"
                        alt=""
                      />
                      <span>{person.label}</span>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box className="flex items-center gap-x-2">
              <h5 className="bg-text3 p-x-1 my-4 rounded font-semibold px-2 text-[black]">
                T
              </h5>
              <Typography className="text-sm font-semibold">
                Texniki sobe
              </Typography>
            </Box>
            <Box className="flex items-center gap-x-2">
              <h5 className="bg-text3 p-x-1 rounded px-2 font-semibold text-[black]">
                S
              </h5>
              <Typography className="text-sm font-semibold uppercase">
                Setem
              </Typography>
            </Box>
          </Box>
          <Box className="flex flex-col gap-y-4 w-1/2">
            <Box>
              <h5 className="mb-1 text-textmuted">Bitme Tarixi</h5>
              <Box className="flex gap-x-2 items-center ">
                <CalendarMonthIcon className="text-lg text-[#0acf97]" />
                <span className="text-sm font-semibold">{task?.endDate}</span>
              </Box>
            </Box>
            <Box>
              <h5 className="mb-1 text-textmuted">Layiheler</h5>
              <Box className="flex gap-x-2 items-center">
                <Box className="text-sm font-semibold">
                  {task?.projects?.map((project, index) => {
                    return (
                      <Box key={index} className="flex gap-x-2 mb-2">
                        <RoomOutlinedIcon className="text-lg text-[#0acf97]" />{" "}
                        <Typography>{project.label}</Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
            <Box>
              <h5 className="mb-1 text-textmuted">Is kateqoriyasi</h5>
              <Box className="flex gap-x-2 items-center">
                <LocalOfferOutlinedIcon className="text-lg text-[#fa5c7c]" />
                <span className="text-sm font-semibold">Kritik</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* area-chart */}
      <Box
        className={`${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        } rounded mb-3 p-5 h-[60vh]`}
      >
        <h4 className="mb-1 text-text1">Progress</h4>
        <AreaChartComponent />
      </Box>

      {/* files */}
      <Box
        className={`${
          light
            ? "bg-bgLight drop-shadow-lg text-textDark2"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary text-text3"
        } rounded p-5`}
      >
        <h4 className={`mb-3 ${light ? "text-textDark2" : "text-text1"}`}>
          Fayllar
        </h4>

        <Box>
          {task.files.length > 0
            ? task.files.map((file, index) => (
                <Box
                  key={index}
                  className="p-2 border-solid border rounded border-[#4d5662] mb-2 flex items-center"
                >
                  <Box className="mr-2">
                    <img
                      className="w-16 rounded-sm"
                      src={file.preview}
                      alt={file.name}
                    />
                  </Box>
                  <Box>
                    <Typography className="text-textmuted">
                      {file.name}
                    </Typography>
                    <Typography>{file.size} MB</Typography>
                  </Box>
                  <IconButton
                    onClick={() => {
                      // FileSaver.saveAs(file.path, file.name); // Put your image url here.

                      // const blob = new Blob(['hello world'], {
                      //   type: file.type,
                      // });
                      // FileSaver.saveAs(blob, file);
                      FileSaver.saveAs(
                        file.path,
                        "scott-osborn-iuRrwjMJZJ4-unsplash.jpeg"
                      );
                    }}
                    className="ml-auto"
                  >
                    <FileDownloadOutlinedIcon />
                  </IconButton>
                </Box>
              ))
            : null}
        </Box>
      </Box>
    </Box>
  );
};

export default SecondColumn;

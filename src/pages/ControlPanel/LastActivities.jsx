// Tunar

import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { useTranslation } from "react-i18next";

// mui icons
import FileUploadIcon from "@mui/icons-material/FileUpload";

// data
const timelineItems = [
  {
    title: "Creative Director",
    description: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    date: "5 min ago",
  },
  {
    title: "Creative Director",
    description: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    date: "5 min ago",
  },
  {
    title: "Creative Director",
    description: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    date: "5 min ago",
  },
  {
    title: "Creative Director",
    description: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    date: "5 min ago",
  },
  {
    title: "Creative Director",
    description: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    date: "5 min ago",
  },
  {
    title: "Creative Director",
    description: "Paul Burgess just purchased “Hyper - Admin Dashboard”!",
    date: "5 min ago",
  },
];

const LastActivities = () => {
  const { light } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  return (
    <div
      className={`${
        light
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      } rounded p-5 my-4`}
    >
      <h1
        className={`mb-4 font-semibold text-lg ${
          light ? "text-textDark2" : "text-slate-50"
        } `}
      >
        {t("sonfealiyyetler")}
      </h1>

      <Box
        className="last-activities-container"
        sx={{ maxHeight: 400, overflow: "auto" }}
      >
        <Timeline>
          {timelineItems.length > 0 &&
            timelineItems.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot className="bg-[#39b0d133] m-0">
                    <FileUploadIcon className="text-xs text-[#39afd1] z-10" />
                  </TimelineDot>
                  <TimelineConnector className="bg-[#404954]" />
                </TimelineSeparator>

                <TimelineContent className="pt-0 pb-4">
                  <h5 className="text-[#39afd1] text-sm font-medium">
                    {item.title}
                  </h5>
                  <p
                    className={`${
                      light ? "text-[#6c757d]" : "text-text3"
                    } text-xs mt-2 mb-1`}
                  >
                    {item.description}
                  </p>
                  <p
                    className={`${
                      light ? "text-[#98a6ad]" : "text-textmuted"
                    } text-xs`}
                  >
                    {item.date}
                  </p>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </Box>
    </div>
  );
};

export default LastActivities;

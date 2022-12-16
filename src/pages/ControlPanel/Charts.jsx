// Tunar

import React from "react";
import { Box } from "@mui/material";
// mui icons
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
// donut chart
import Chart from "./Chart";

const chartsData = [
  {
    title: "Port Baku Residence",
    status: [
      {
        quantity: 60,
        percentage: 60,
        name: "Tamamlanmış",
        id: 1,
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
      },
      {
        quantity: 30,
        percentage: 30,
        name: "Dəvam edən",
        id: 2,
        icon: <TrendingDownIcon sx={{ color: "rgb(250, 92, 124)" }} />,
      },
      {
        quantity: 10,
        percentage: 10,
        name: "Gecikdirilən",
        id: 3,
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
      },
    ],
  },
  {
    title: "Port Baku Residence",
    status: [
      {
        quantity: 60,
        percentage: 60,
        name: "Tamamlanmış",
        id: 1,
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
      },
      {
        quantity: 30,
        percentage: 30,
        name: "Dəvam edən",
        id: 2,
        icon: <TrendingDownIcon sx={{ color: "rgb(250, 92, 124)" }} />,
      },
      {
        quantity: 10,
        percentage: 10,
        name: "Gecikdirilən",
        id: 3,
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
      },
    ],
  },
  {
    title: "Port Baku Residence",
    status: [
      {
        quantity: 60,
        percentage: 60,
        name: "Tamamlanmış",
        id: 1,
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
      },
      {
        quantity: 30,
        percentage: 30,
        name: "Dəvam edən",
        id: 2,
        icon: <TrendingDownIcon sx={{ color: "rgb(250, 92, 124)" }} />,
      },
      {
        quantity: 10,
        percentage: 10,
        name: "Gecikdirilən",
        id: 3,
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
      },
    ],
  },
  {
    title: "Port Baku Residence",
    status: [
      {
        quantity: 60,
        percentage: 60,
        name: "Tamamlanmış",
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
        id: 1,
      },
      {
        quantity: 30,
        percentage: 30,
        name: "Dəvam edən",
        icon: <TrendingDownIcon sx={{ color: "rgb(250, 92, 124)" }} />,
        id: 2,
      },
      {
        quantity: 10,
        percentage: 10,
        name: "Gecikdirilən",
        icon: <TrendingUpIcon sx={{ color: "rgb(10, 207, 151)" }} />,
        id: 3,
      },
    ],
  },
];

export default function Charts() {

  return (
    <Box className="grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 auto-rows-max gap-5">
      {chartsData.map((chart, index) => (
        <Chart key={index} {...chart} />
      ))}
    </Box>
  );
}

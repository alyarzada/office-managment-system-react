import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Donut } from "britecharts-react";

const Chart = ({ title, status }) => {
  const { light } = useSelector((state) => state.themes);
  const navigate = useNavigate();

  useEffect(() => {
    const donuts = document.querySelectorAll(".donut-container");

    donuts.forEach((donut) => {
      const centeredTitle = donut.querySelector(".legend-group");

      if (light) {
        centeredTitle.style.fill = "#6c757d";
      } else {
        centeredTitle.style.fill = "#ced4da";
      }
    });
  }, [light]);

  return (
    <Box
      className={`rounded p-4 ${
        light
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }`}
    >
      <Box className="text-center">
        <h5
          className={`${
            light ? "text-textDark2" : "text-text1"
          } font-semibold uppercase`}
        >
          {title}
        </h5>
      </Box>

      <Donut
        isAnimated={true}
        customClick={(e) => navigate(`/archive/${e.data.name}`)}
        data={status}
        hasFixedHighlightedSlice={true}
        externalRadius={118}
        internalRadius={66}
        highlightSliceById={1}
        colorSchema={[
          "rgb(10, 207, 151)",
          "rgb(114, 124, 245)",
          "rgb(250, 92, 124)",
        ]}
      />

      <Box className="flex justify-center text-center gap-x-6 sm:gap-x-10 xmd:gap-x-12 md:gap-x-14">
        {status.map((item, index) => (
          <Box key={index}>
            <Link to={`/archive/${item.name}`} className="text-text2 text-xs">
              {item.icon}
              <h2 className={light ? "text-[#6c757d]" : "text-text1"}>
                {`${item.percentage}%`}
              </h2>
              {item.name}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Chart;

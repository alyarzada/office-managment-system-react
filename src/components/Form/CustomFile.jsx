import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Dropzone from "react-dropzone";

const CustomFile = ({
  preview,
  setPreview,
  allFiles,
  setAllFiles,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { light } = useSelector((state) => state.themes);

  const dropHandle = (acceptedFiles) => {
    console.log(acceptedFiles);
    setAllFiles((prev) => [...acceptedFiles, ...prev]);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.addEventListener("loadend", () => {
        setPreview((prev) => [reader.result, ...prev]);
      });
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    helpers.setValue(allFiles);
  }, [allFiles]);

  return (
    <Box>
      <Dropzone
        onDrop={(acceptedFiles) => dropHandle(acceptedFiles)}
        {...props}
      >
        {({ getRootProps, getInputProps }) => (
          <Box>
            <Box {...getRootProps()}>
              <input {...getInputProps()} />
              <Typography
                className={`${
                  light ? "text-[#000]" : "text-[#fff]"
                } opacity-[0.7]"`}
              >
                Faylı seçmək üçün, sürükləyin və ya buraya klikləyin...
              </Typography>
            </Box>
          </Box>
        )}
      </Dropzone>
    </Box>
  );
};

export default CustomFile;

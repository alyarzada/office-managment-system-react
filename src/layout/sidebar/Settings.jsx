// Fuad

import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLight,
  setBoxed,
  setLeftLight,
  setScrollable,
} from "../../app/Slicers/themes";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  IconButton,
} from "@mui/material";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

export const Settings = () => {
  const closeSetting = () => {
    menuRef.current.classList.remove("activeSetting");
  };
  const dispatch = useDispatch();

  //settings dropdown
  const menuRef = useRef();
  const menuToggleRef = useRef();

  //redux
  const { light } = useSelector((state) => state.themes);

  useEffect(() => {
    const clickOutsideRef = (content_ref, toggle_ref) => {
      document.addEventListener("mousedown", (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
          content_ref.current.classList.toggle("activeSetting");
        } else {
          // user click outside toggle and content
          if (content_ref.current && !content_ref.current.contains(e.target)) {
            content_ref.current.classList.remove("activeSetting");
          }
        }
      });
    };
    clickOutsideRef(menuRef, menuToggleRef);
  }, []);

  return (
    <Box>
      <IconButton ref={menuToggleRef}>
        <SettingsOutlinedIcon className="animate-spin" />
      </IconButton>
      <Box
        ref={menuRef}
        className="fixed settings rounded-bl-lg rounded-tl-lg z-20 justify-between top-0 right-0 w-[300px] bg-[#37404A] h-screen shadow-shadowSettings "
      >
        {/* header */}
        <Box
          className={` ${
            light ? "bg-[#313A46]" : "bg-[#727CF5]"
          } rounded-tl-lg flex items-center justify-between px-5 py-6 `}
        >
          <h5 className="text-white text-[.9rem] font-semibold ">Settings</h5>
          <IconButton onClick={closeSetting}>
            <HighlightOffRoundedIcon />
          </IconButton>
        </Box>

        {/* body */}
        <Box
          className={` rounded-bl-lg settingsContainer ${
            light
              ? "bg-bgLight"
              : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
          } h-full py-10  overflow-y-auto`}
        >
          <Box className="px-4 mb-6 ">
            <h5
              className={`${
                light ? "text-textDark" : "text-text3 "
              } text-[.9rem] font-semibold `}
            >
              Color Scheme
            </h5>
            <hr className="h-[1px] text-text3 opacity-25 my-4" />

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="darkmode"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="lightmode"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setLight(true))}
                    />
                  }
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}  `}
                    >
                      Light Mode
                    </span>
                  }
                  className="text-text1"
                />
                <FormControlLabel
                  value="darkmode"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setLight(false))}
                    />
                  }
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}`}
                    >
                      Dark Mode
                    </span>
                  }
                  className="text-text1"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box className="px-4 mb-6">
            <h5
              className={`${
                light ? "text-textDark" : "text-text3 "
              } text-[.9rem] font-semibold `}
            >
              Width
            </h5>
            <hr className="h-[1px] text-text3 opacity-25 my-4" />
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="fluid"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="fluid"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setBoxed(false))}
                    />
                  }
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}`}
                    >
                      Fluid
                    </span>
                  }
                  className="text-text1"
                />
                <FormControlLabel
                  value="boxed"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setBoxed(true))}
                    />
                  }
                  className="text-text1"
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"} `}
                    >
                      Boxed
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box className="px-4 mb-10">
            <h5
              className={`${
                light ? "text-textDark" : "text-text3 "
              } text-[.9rem] font-semibold `}
            >
              Left Sidebar
            </h5>
            <hr className="h-[1px] text-text3 opacity-25 my-4" />
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="dark"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="light"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setLeftLight("light"))}
                    />
                  }
                  className="text-text1"
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}  `}
                    >
                      Light
                    </span>
                  }
                />
                <FormControlLabel
                  value="dark"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setLeftLight("dark"))}
                    />
                  }
                  className="text-text1"
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}  `}
                    >
                      Dark
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>

            <br />
            <br />

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="fixed"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="fixed"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setScrollable(false))}
                    />
                  }
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}  `}
                    >
                      Fixed
                    </span>
                  }
                  className="text-text1"
                />

                <FormControlLabel
                  value="scrollable"
                  control={
                    <Radio
                      className={`${light ? "text-black" : "text-white"}`}
                      onChange={() => dispatch(setScrollable(true))}
                    />
                  }
                  className="text-text1"
                  label={
                    <span
                      className={`${light ? "text-textDark" : "text-text1"}  `}
                    >
                      Scrollable
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

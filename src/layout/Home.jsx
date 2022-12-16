// Tunar
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import SideBar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./styles/styles.css";

const Home = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { openedSidebar, light } = useSelector((state) => state.themes);
  //
  return (
    <Box>
      <Header setOpenSubMenu={setOpenSubMenu} openSubMenu={openSubMenu} />
      <SideBar setOpenSubMenu={setOpenSubMenu} openSubMenu={openSubMenu} />
      <Box
        className={`px-4 lg:px-8 pt-24 transition-all flex flex-col justify-between min-h-screen overflow-x-hidden ease-in-out  ${
          light ? "bg-[#FAFBFE]" : "bg-bgMain"
        }  
    
     ${
       openedSidebar
         ? "content-wrapper-width-open ml-0 md:ml-[250px]"
         : "content-wrapper-width-close ml-0 md:ml-[80px]"
     }`}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;

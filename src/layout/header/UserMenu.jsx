import React, { useRef, useState } from "react";
import { Box, MenuItem, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import user from "../../assets/sidebar/user.jpg";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomMenu from "../../components/UI/CustomMenu";

const userMenu = [
  {
    icon: <PersonIcon className="text-lg mr-2" />,
    content: { az: "Profil", en: "Profile" },
    path: "/profile",
  },
  {
    icon: <LogoutIcon className="text-lg mr-2" />,
    content: { az: "Çıxış", en: "Log out" },
    path: "/login",
  },
];

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const btnRef = useRef(null);

  const handleClick = () => setOpenMenu((prev) => !prev);

  return (
    <Box className="relative">
      <Avatar
        alt="Remy Sharp"
        src={user}
        onClick={handleClick}
        ref={btnRef}
        className="cursor-pointer"
      />
      {openMenu ? (
        <CustomMenu
          className="absolute"
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          ref={btnRef}
          top="top-12"
        >
          {userMenu.map((list, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                navigate(list.path);
                setOpenMenu(false);
              }}
            >
              {list.icon}
              {list.content.az}
            </MenuItem>
          ))}
        </CustomMenu>
      ) : null}
    </Box>
  );
};

export default UserMenu;

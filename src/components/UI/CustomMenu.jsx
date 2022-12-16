import React, { useEffect, forwardRef, useRef } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomMenu = forwardRef(
  (
    {
      children,
      openMenu,
      setOpenMenu,
      onDelete,
      onEdit,
      editDelete,
      top = "top-8",
      right = "right-2",
      ...props
    },
    ref
  ) => {
    const menuRef = useRef(null);
    const { light } = useSelector((state) => state.themes);

    useEffect(() => {
      const handleMenu = (e) => {
        if (
          !e.path.includes(menuRef.current) &&
          !e.path.includes(ref.current)
        ) {
          setOpenMenu(false);
        }
      };
      document.addEventListener("mousedown", handleMenu);

      return () => document.removeEventListener("mousedown", handleMenu);
    }, []);

    return (
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }}
        ref={menuRef}
        className={`absolute z-40 w-40 ${top} ${right} rounded ${
          light ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {editDelete ? (
          <List>
            <ListItem onClick={onEdit} className="p-0">
              <ListItemButton className="w-full py-0 px-2">
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Düzəlt" />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={onDelete} className="p-0">
              <ListItemButton className="py-0 px-2">
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Sil" />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          children
        )}
      </motion.div>
    );
  }
);

export default CustomMenu;

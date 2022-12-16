// Tunar

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { UserSchema } from "../../validations/CreateNewUserValidation";

import UsersHeader from "./UsersHeader";
import UsersBody from "./UsersBody";
import CreateGroupModal from "./CreateGroupModal";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../app/Slicers/users";

const Users = () => {
  const [userModal, setUserModal] = useState(false);
  const [groupModal, setGroupModal] = useState(false);
  const { light, disableTransform } = useSelector((state) => state.themes);
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUsers());
  }, []);

  const handleClose = () => {
    setGroupModal(false);
  };

  return (
    <motion.div
      initial={{ x: "50%" }}
      animate={{ x: 0 }}
      exit={{ opacity: "-50%" }}
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
    >
      <UsersHeader setUserModal={setUserModal} setGroupModal={setGroupModal} />
      <Box
        className={`my-4 rounded ${
          light
            ? "bg-bgLight drop-shadow-lg"
            : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
        }  w-full `}
      >
        <UsersBody />
      </Box>

      <Typography>List of Users</Typography>
      <hr />
      <br />

      {loading ? <Box className="text-white">loading...</Box> : null}
      {!loading && error ? <Box>Error: {error}</Box> : null}
      {!loading && users.length > 0 ? (
        <Box>
          {users.map((user) => (
            <Box key={user.id}>
              <Typography>{user.name}</Typography>
            </Box>
          ))}
        </Box>
      ) : null}

      {groupModal && (
        <CreateGroupModal
          groupModal={groupModal}
          setGroupModal={setGroupModal}
          handleClose={handleClose}
        />
      )}
    </motion.div>
  );
};

export default Users;

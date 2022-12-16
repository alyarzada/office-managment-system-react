// Tunar

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { ProjectSchema } from "../../validations/CreateProjectValidation";
import { deleteProject, editProject } from "../../app/Slicers/projects";

// icons
import CustomMenu from "../../components/UI/CustomMenu";
import CustomDialogModal from "../../components/UI/CustomDialogModal";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomFile from "../../components/Form/CustomFile";
import CustomModal from "../../components/UI/CustomModal";

const optionsPer = [
  { label: "Charles Scott", value: "charles" },
  { label: "Marie Ortez", value: "mary" },
  { label: "Travis Hammer", value: "travis" },
  { label: "Lisa Potts", value: "lisa" },
  { label: "Michael Orton", value: "michael" },
  { label: "Kevin McCallister", value: "kevin" },
  { label: "John Henderson", value: "john" },
];

const Project = ({ item }) => {
  const { light } = useSelector((state) => state.themes);
  const [preview, setPreview] = useState([]);
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(null);
  const [openModal, setOpenModal] = useState({ isOpen: false, title: "" });
  const [openDialog, setOpenDialog] = useState({
    isOpen: false,
    message: "",
  });

  const deleteHandler = () => {
    setOpenMenu(null);
    setOpenDialog({
      isOpen: true,
      message: "Proyekti silmək istədiyinizə əminsiniz ?",
    });
  };

  const editHandler = () => {
    setOpenMenu(null);
    setOpenModal({ title: "Proyetki Editlə", isOpen: true });
  };

  const handleAgree = () => {
    dispatch(deleteProject(item.id));
  };

  useEffect(() => {
    item.files.forEach((file) => {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setPreview((prev) => [reader.result, ...prev]);
      });

      reader.readAsDataURL(file);
    });
  }, []);

  return (
    <Box
      className={`rounded p-5 [&>*]:mb-4 ${
        light
          ? "bg-bgLight drop-shadow"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }`}
    >
      <Box className="flex items-center justify-between">
        <h4
          className={`${
            light ? "text-textDark" : "text-white"
          } font-semibold text-lg`}
        >
          <h5>{item.projectName}</h5>
        </h4>
        <Box className="relative">
          <CustomMenu
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            onDelete={deleteHandler}
            onEdit={editHandler}
          />
        </Box>
      </Box>

      <CustomDialogModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleAgree={handleAgree}
      />

      <Box>
        <Typography className="text-text2 pr-10 text-left ">
          <small>{item.aboutProject}...</small>
          <Link to="/">
            <small className="text-text2 font-semibold">ətraflı</small>
          </Link>
        </Typography>

        <Box className="flex gap-x-1 mt-3">
          {item.teamMembers.length > 0
            ? item.teamMembers.map((member, index) => (
                <Box
                  className="rounded-sm py-[2px] px-2 bg-green-500 text-white"
                  key={index}
                >
                  <Typography>{member.label}</Typography>
                </Box>
              ))
            : null}
        </Box>

        <Box className="mt-3 flex flex-wrap gap-1">
          {preview.length > 0 ? (
            preview.map((file, index) => (
              <img
                className="rounded-sm"
                key={index}
                width={70}
                src={file}
                alt={file}
              />
            ))
          ) : (
            <div>file yoxdur</div>
          )}
        </Box>
      </Box>

      {openModal.isOpen ? (
        <CustomModal
          title={openModal.title}
          open={openModal.isOpen}
          width="w-[30%]"
        >
          <Formik
            initialValues={{
              id: item.id,
              projectName: item.projectName,
              aboutProject: item.aboutProject,
              teamMembers: item.teamMembers,
              files: item.files,
            }}
            onSubmit={(values) => {
              console.log(values);
              dispatch(editProject({ values: values, id: item.id }));
              setOpenModal(false);
            }}
            validationSchema={ProjectSchema}
          >
            {({ errors, touched }) => (
              <Form className="p-3">
                <CustomTextField
                  name="projectName"
                  label="Layihənin adı"
                  defaultValue={item.projectName}
                  error={errors.projectName}
                />
                <CustomTextField
                  name="aboutProject"
                  rows="5"
                  label="Layihə haqqında məlumat"
                  defaultValue={item.aboutProject}
                  error={errors.aboutProject}
                />
                <Box className="mb-6">
                  <CustomSelect
                    options={optionsPer}
                    label="Komanda üzvləri"
                    name="teamMembers"
                    multiple
                    defaultValues={item.teamMembers}
                  />
                </Box>
                <Box className="mb-4">
                  <Box
                    className={`cursor-pointer border border-dashed ${
                      light ? "border-black" : "border-[#ffffff4f]"
                    }  py-20 text-center rounded-lg`}
                  >
                    <CustomFile name="files" />
                  </Box>
                </Box>
                <Box className="flex justify-between">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setOpenModal(false);
                    }}
                  >
                    Ləğv et
                  </Button>
                  <Button variant="contained" color="success" type="submit">
                    Düzəlt
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </CustomModal>
      ) : null}
    </Box>
  );
};

export default Project;

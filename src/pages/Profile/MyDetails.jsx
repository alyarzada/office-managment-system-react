import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, FieldArray } from "formik";
import { useSelector } from "react-redux";
// mui icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SaveIcon from "@mui/icons-material/Save";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomDatePicker from "../../components/Form/CustomDatePicker";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CustomGenderRadio from "../../components/Form/CustomGenderRadio";

const MyDetails = () => {
  const { light } = useSelector((state) => state.themes);

  return (
    <Box>
      <Box className="mb-8 text-text3">
        <h5>
          <AccountCircleIcon className="mr-2" />
          ŞƏXSI MƏLUMATLAR
        </h5>
      </Box>

      <Box>
        <Formik
          initialValues={{
            name: "",
            emails: [
              {
                id: uuidv4(),
                title: "",
              },
            ],
            mobiles: [
              {
                id: uuidv4(),
                title: "",
              },
            ],
            birthday: "",
            gender: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CustomTextField
                className="col-span-1 md:col-span-2 mb-0"
                label="Ad"
                name="name"
              />
              <FieldArray name="mobiles">
                {({ insert, remove, push }) => (
                  <Box className="flex flex-col gap-y-4">
                    {values.mobiles.map((item, index) => (
                      <Box key={index} className="flex items-center gap-x-2">
                        <CustomTextField
                          label="Telefon nömrəsini daxil edin"
                          name={`mobiles.${index}.title`}
                          className="mb-0 flex-1"
                        />
                        {index === 0 && (
                          <IconButton
                            onClick={() => push({ id: uuidv4(), title: "" })}
                          >
                            <AddOutlinedIcon />
                          </IconButton>
                        )}
                        {index !== 0 && (
                          <IconButton onClick={() => remove(index)}>
                            <DeleteOutlineOutlinedIcon />
                          </IconButton>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </FieldArray>
              <FieldArray name="emails">
                {({ insert, remove, push }) => (
                  <Box className="flex flex-col gap-y-4">
                    {values.emails.map((item, index) => (
                      <Box key={index} className="flex items-center gap-x-2">
                        <CustomTextField
                          label="E-poct unvanini daxil edin"
                          name={`emails.${index}.title`}
                          className="mb-0 flex-1"
                        />
                        {index === 0 && (
                          <IconButton
                            onClick={() => push({ id: uuidv4(), title: "" })}
                          >
                            <AddOutlinedIcon />
                          </IconButton>
                        )}
                        {index !== 0 && (
                          <IconButton onClick={() => remove(index)}>
                            <DeleteOutlineOutlinedIcon />
                          </IconButton>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </FieldArray>

              <CustomDatePicker
                name="birthday"
                label="Ad günü"
                className="mb-0"
              />
              <CustomGenderRadio name="gender" />

              <Box className="col-span-1 md:col-span-2 flex justify-end">
                <Button
                  variant="contained"
                  type="submit"
                  color="success"
                  startIcon={
                    <SaveIcon className={light ? "text-white" : "text-black"} />
                  }
                >
                  Yadda saxla
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default MyDetails;

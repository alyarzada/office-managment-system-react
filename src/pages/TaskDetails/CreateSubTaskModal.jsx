// Tunar
import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import { Formik, Form, FieldArray } from "formik";
import { useDispatch } from "react-redux";
import { createNewSubTask } from "../../app/Slicers/tasks";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import CustomModal from "../../components/UI/CustomModal";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomTextField from "../../components/Form/CustomTextField";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { SubtaskSchema } from "../../validations/CreateSubtaskModal";

const CreateSubTaskModal = ({ open, setOpen, id, task, title }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <CustomModal
      title={title}
      width="w-[36%]"
      open={open}
      handleClose={() => setOpen(false)}
    >
      <Formik
        initialValues={{
          id: uuidv4(),
          subTaskName: "",
          responsiblePeople: [],
          subTasks: [
            {
              id: uuidv4(),
              title: "",
            },
          ],
        }}
        onSubmit={(values) => {
          console.log(values);
          setOpen(false);
          dispatch(createNewSubTask({ id, values }));
        }}
        validationSchema={SubtaskSchema}
      >
        {({ values }) => (
          <Form>
            <CustomTextField name="subTaskName" multiline label="Adı" />
            <CustomSelect
              name="responsiblePeople"
              options={task?.responsiblePeople}
              label="Məsul şəxs"
              multiple
            />
            <FieldArray name="subTasks">
              {({ insert, remove, push }) => (
                <Box className="flex flex-col gap-y-4">
                  {values.subTasks.length > 0 &&
                    values.subTasks.map((item, index) => (
                      <Box key={index} className="flex items-center">
                        <CustomTextField
                          label="Tapşırıq"
                          name={`subTasks.${index}.title`}
                          sx={{ flex: 1 }}
                          className="mb-0"
                        />
                        {index !== 0 && (
                          <IconButton
                            type="button"
                            onClick={() => remove(index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                        {index === 0 && (
                          <IconButton
                            type="button"
                            onClick={() => push({ id: uuidv4(), title: "" })}
                          >
                            <AddIcon />
                          </IconButton>
                        )}
                      </Box>
                    ))}
                </Box>
              )}
            </FieldArray>
            <Box className="flex px-4 py-3 justify-end">
              <Button
                type="submit"
                color="success"
                variant="contained"
                className="capitalize"
              >
                Təsdiq et
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default CreateSubTaskModal;

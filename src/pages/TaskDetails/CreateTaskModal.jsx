import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { Box, Button, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomModal from "../../components/UI/CustomModal";
import CustomTextField from "../../components/Form/CustomTextField";

const CreateTaskModal = ({ open, setOpen, task, id }) => {
  const { t } = useTranslation();
  const { tasks } = useSelector((state) => state.tasks);

  // set options of react-select input
  const currentTask = tasks.find((item) => item.id === task.id);
  const optSubTasks = currentTask?.subTasks?.map((item) => {
    return { value: item.taskName, label: item.taskName };
  });

  return (
    <CustomModal open={open} handleClose={() => setOpen(false)}>
      <Box>
        <Formik
          initialValues={{
            taskName: "",
            subTasks: [
              {
                id: uuidv4(),
                title: "",
              },
            ],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <CustomSelect
                name="taskName"
                options={optSubTasks}
                label="Məsul şəxs"
                placeholder={t("sec")}
                isMulti
              />
             
              <Box className="flex justify-end">
                <Button variant="contained" type="submit" className="capitalize">
                  Təsdiq et
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </CustomModal>
  );
};

export default CreateTaskModal;

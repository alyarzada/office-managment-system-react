import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import CustomSelect from "../../components/Form/CustomSelect";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomModal from "../../components/UI/CustomModal";

import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

//multiselect
const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
  { label: "Crescent", value: "crescent" },
];
const optionsPer = [
  { label: "Charles Scott", value: "charles" },
  { label: "Marie Ortez", value: "mary" },
  { label: "Travis Hammer", value: "travis" },
  { label: "Lisa Potts", value: "lisa" },
  { label: "Michael Orton", value: "michael" },
  { label: "Kevin McCallister", value: "kevin" },
  { label: "John Henderson", value: "john" },
];

const CreateGroupModal = ({ groupModal, setGroupModal, handleClose }) => {
  const { t } = useTranslation();
  const { light } = useSelector((state) => state.themes);
  return (
    <CustomModal title="Qrup yarat" open={groupModal} handleClose={handleClose}>
      <Formik
        initialValues={{
          groupName: "",
          projects: "",
          people: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form className=" w-full">
            <Box className="flex items-center py-6 px-6 flex-nowrap flex-col md:flex-row">
              <Box className="w-full">
                <CustomTextField
                  multiline
                  autoComplete="off"
                  id="name"
                  name="qrupun adi"
                  label="Taskın adı"
                />
                <Box className="mb-6">
                  <CustomSelect
                    label="Layihe"
                    name="projects"
                    options={optionsProj}
                  />
                </Box>
                <Box className="mb-6">
                  <CustomSelect
                    label="Mesul Sexsler"
                    name="people"
                    options={optionsPer}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="flex py-4 px-6 justify-end flex-col border-t border-[#fffff04f] sm:flex-row gap-1">
              <Button
                startIcon={<TaskAltRoundedIcon />}
                className="capitalize"
                variant="outlined"
                color="error"
                onClick={() => setGroupModal(false)}
              >
                Legv et
              </Button>
              <Button
                startIcon={
                  <TaskAltRoundedIcon
                    className={light ? "text-white" : "text-black"}
                  />
                }
                className="capitalize"
                variant="contained"
                color="success"
              >
                {t("yarat")}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default CreateGroupModal;

// Tunar
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";
import DataTable from "../../components/UI/data_table";

const tableHeader = [
  {
    field: "name",
    headerName: "Ad",
    width: 180,
    // renderCell: (params) => (
    //   <Link to={`/tasks/${params.id}`}>{params.value}</Link>
    // ),
  },
  {
    field: "job",
    headerName: "Vəzifə",
    width: 200,
  },
  {
    field: "project",
    headerName: "Layihə",
    width: 200,
  },
  {
    field: "email",
    headerName: "Elektron Poçt ünvanı",
    width: 190,
  },
  {
    field: "rights",
    headerName: "Hüquqlar",
    width: 190,
  },
  {
    field: "created",
    headerName: "Yaradılıb",
    type: "actions",
    width: 190,
    sortable: false,
  },
];

const UsersBody = () => {
  const { light } = useSelector((state) => state.themes);
  const { users } = useSelector((state) => state.users);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      <Box className="py-6 px-6">
        <DataTable columns={tableHeader} rows={users} />
      </Box>

      <Box
        className={`flex justify-between items-center gap-x-1 ${
          light ? "bg-bgLight" : "bg-[#404954]"
        } py-5 px-3 sm:px-6 rounded mt-2`}
      >
        <Link to="/">
          <Button
            startIcon={<ReplyIcon className={light ? "text-white" : "text-black"} />}
            className="capitalize"
            variant="contained"
          >
            {t("geriqayit")}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default UsersBody;

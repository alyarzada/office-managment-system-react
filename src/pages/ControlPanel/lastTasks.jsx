// Tunar
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import DataTable from "../../components/UI/data_table";
import TaskActions from "../../data/TaskAction";

// mui
import Button from "@mui/material/Button";
const tableHeader = [
  {
    field: "taskName",
    headerName: "Taskın adı",
    width: 180,
    renderCell: (params) => (
      <Link to={`/tasks/${params.id}`}>{params.value}</Link>
    ),
  },
  {
    field: "responsiblePeople",
    headerName: "Üzvlər",
    width: 200,
    valueGetter: (params) =>
      params.row.responsiblePeople.map(
        (person, index) => index + ". " + person.label
      ),
  },
  {
    field: "projects",
    headerName: "Layihə",
    width: 200,

    valueGetter: (params) =>
      params.row.projects.map((person, index) => index + ". " + person.label),
  },
  {
    field: "startDate",
    headerName: "Başlama",
    width: 190,
  },
  {
    field: "endDate",
    headerName: "Bitmə",
    width: 190,
  },
  // { field: "taskDetails", headerName: "Sub tasklar", width: 200 },
  { field: "taskDetails", headerName: "Şərhlər", width: 130, sortable: false },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 180,
    sortable: false,
    renderCell: (params) => <TaskActions {...{ params }} />,
  },
];

function LastTasks() {
  const { t } = useTranslation();
  const { light } = useSelector((state) => state.themes);
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div
      className={`${
        light
          ? "bg-bgLight drop-shadow-lg"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      } p-5 my-4 rounded lastTask-scrollbar`}
    >
      <h1
        className={`mb-4 font-semibold text-lg ${
          light ? "text-textDark2" : "text-slate-50"
        } `}
      >
        {t("sontasklar")}
      </h1>
      <DataTable columns={tableHeader} rows={tasks} />
      <div className="flex justify-end mt-5">
        <Link to="/tasks">
          <Button variant="contained" className="capitalize" color="primary">
            Ətraflı
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LastTasks;

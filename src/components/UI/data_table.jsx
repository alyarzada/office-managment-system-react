import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = (props) => {
  return (
    <DataGrid
      pageSize={5}
      rowsPerPageOptions={[5]}
      className="lastTask-scrollbar"
      autoHeight
      checkboxSelection
      {...props}
    />
  );
};

export default DataTable;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";


const SuiteList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [listOfResults, setListOfResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/suitelist").then((response) => {
      setListOfResults(response.data);
    });
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Suite Name",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "suiteid",
      headerName: "Suite Id",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "log",
      headerName: "Log",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "manage",
      headerName: "Manage",
      sortable: false,
      disableClickEventBubbling: true,
      flex: 0.4,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <Box
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <FindInPageOutlinedIcon index={params.row.id} />
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Test Suites" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[400],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[900],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[300]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={listOfResults}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default SuiteList;

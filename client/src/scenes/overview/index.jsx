import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataOverview } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Overview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [listOfResults, setListOfResults] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/results").then((response) => {
      setListOfResults(response.data);
    });
  }, []);

  const columns = [
    {
      field: "testbench",
      headerName: "Testbench",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "chiptype",
      headerName: "Chiptype",
      flex: 1,
      cellClassName: "name-column--cell",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "variant",
      headerName: "Variant",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "version",
      headerName: "Version",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "build",
      headerName: "Build",
      flex: 0.7,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "results",
      headerName: "Results",
      flex: 0.8,
      headerAlign: "center",
      align: "center",
      renderCell: () => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "report",
      headerName: "Report",
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
      <Header title="Overview" />
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

export default Overview;

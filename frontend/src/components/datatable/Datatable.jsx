import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  DeleteForeverOutlined,
  ModeEditOutlineRounded,
} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchStat, setSearchStat] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://zocketshubham.herokuapp.com/prod/get"
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`https://zocketshubham.herokuapp.com/prod/delete/${id}`);
    setData(data.filter((item) => item._id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <ModeEditOutlineRounded className="viewButton" />
            <DeleteIcon
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Your Campagins
        <Link to="/products/new" className="link">
          <AddCircleOutlineIcon className="addIcon" />
          Create new Campagin
        </Link>
      </div>
      <div className="paru">Check the list of campagins you created</div>
      <div className="search">
        <SearchOutlinedIcon className="icon" />
        <input
          type="text"
          placeholder="Search for the campagin"
          onChange={(e) => {
            setSearch("");
            setSearchStat(e.target.value);
          }}
        />
      </div>

      <Box sx={{ minWidth: 10 }} className="box">
        <FormControl fullWidth>
          <InputLabel className="inpy">Platfrom</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search}
            label="Platform"
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchStat("");
            }}
          >
            <MenuItem value={"All Platform"}>All Platfrom</MenuItem>
            <MenuItem value={"google"}>Google</MenuItem>
            <MenuItem value={"facebook"}>Facebook</MenuItem>
            <MenuItem value={"youtube"}>Youtube</MenuItem>
            <MenuItem value={"instagram"}>Instagram</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 10 }} className="box2">
        <FormControl fullWidth>
          <InputLabel className="inpy">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search}
            label="Status"
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchStat("");
            }}
          >
            <MenuItem value={"All Status"}>All Status</MenuItem>
            <MenuItem value={"livenow"}>Live Now</MenuItem>
            <MenuItem value={"paused"}>Paused</MenuItem>
            <MenuItem value={"exhausted"}>exhausted</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 10 }} className="box3">
        <FormControl fullWidth className="formDate">
          <InputLabel className="inpy">Dates</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={search}
            label="Status"
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchStat("");
            }}
          >
            <MenuItem value={1}>Last 1 day</MenuItem>
            <MenuItem value={2}>Last 2 days</MenuItem>
            <MenuItem value={3}>last 3 days</MenuItem>
            <MenuItem value={4}>last 4 dyas</MenuItem>
            <MenuItem value={5}>last 5 dyas</MenuItem>
            <MenuItem value={6}>last 6 dyas</MenuItem>
            <MenuItem value={7}>last 7 dyas</MenuItem>
            <MenuItem value={8}>last 8 dyas</MenuItem>
            <MenuItem value={9}>last 9 dyas</MenuItem>
            <MenuItem value={10}>last 10 dyas</MenuItem>
            <MenuItem value={11}>last 11 dyas</MenuItem>
            <MenuItem value={12}>last 12 dyas</MenuItem>
            <MenuItem value={13}>last 13 dyas</MenuItem>
            <MenuItem value={14}>last 14 dyas</MenuItem>
            <MenuItem value={15}>last 15 dyas</MenuItem>
            <MenuItem value={16}>last 16 dyas</MenuItem>
            <MenuItem value={17}>last 17 dyas</MenuItem>
            <MenuItem value={18}>last 18 dyas</MenuItem>
            <MenuItem value={19}>last 19 dyas</MenuItem>
            <MenuItem value={20}>last 20 dyas</MenuItem>
            <MenuItem value={21}>last 21 dyas</MenuItem>
            <MenuItem value={22}>last 22 dyas</MenuItem>
            <MenuItem value={23}>last 23 dyas</MenuItem>
            <MenuItem value={24}>last 24 dyas</MenuItem>
            <MenuItem value={25}>last 25 dyas</MenuItem>
            <MenuItem value={26}>last 26 dyas</MenuItem>
            <MenuItem value={27}>last 27 dyas</MenuItem>
            <MenuItem value={28}>last 28 dyas</MenuItem>
            <MenuItem value={29}>last 29 dyas</MenuItem>
            <MenuItem value={30}>last 30 dyas</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={
          search === "" && searchStat === ""
            ? data
            : searchStat !== "" && search === ""
            ? data.filter((item) => {
                if (
                  item.campagin.toLowerCase().includes(searchStat.toLowerCase())
                ) {
                  return item;
                } else {
                  return null;
                }
              })
            : search == "All Platform" && searchStat === ""
            ? data
            : search === "google" && searchStat === ""
            ? data.filter((item) => {
                if (
                  item.platform.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
            : search === "facebook" && searchStat === ""
            ? data.filter((item) => {
                if (
                  item.platform.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
            : search === "youtube" && searchStat === ""
            ? data.filter((item) => {
                if (
                  item.platform.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
            : search === "instagram" && searchStat === ""
            ? data.filter((item) => {
                if (
                  item.platform.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
            : search === "All Status" && searchStat === ""
            ? data
            : search === "livenow" && searchStat === ""
            ? data.filter((item) => {
                if (item.status.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
            : search === "paused" && searchStat === ""
            ? data.filter((item) => {
                if (item.status.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
            : search === "exhausted" && searchStat === ""
            ? data.filter((item) => {
                if (item.status.toLowerCase().includes(search.toLowerCase())) {
                  return item;
                }
              })
            : data.filter((item) => {
                const dateDb = item.date;
                const date = new Date(dateDb);
                const todayDate = new Date();
                const diffTime = Math.abs(todayDate.getTime() - date.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays >= search) {
                  return item;
                } else {
                  return null;
                }
              })
        }
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;

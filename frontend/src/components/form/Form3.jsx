import React, { useState, useEffect } from "react";
import "./form3.scss";
import CalendarComp from "../calendar/DateRangePickerComp";
import CalendarComp1 from "../calendar/DateRangePickerComp1";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FlareIcon from "@mui/icons-material/Flare";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const From3 = () => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(false);
  const [style1, setStyle1] = useState("button1");
  const [style2, setStyle2] = useState("button1");
  const [style3, setStyle3] = useState("button1");
  const [style4, setStyle4] = useState("button1");
  const [val, setVal] = useState([1, 100000]);
  const [val1, setVal1] = useState([1, 30]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [search, setSearch] = useState();
  const [location, setLocation] = useState("");

  const handleClick = (e) => {
    if (button1 !== true) {
      setButton1(true);
      setButton2(false);
      setStyle1("button1");
      setStyle2("button2");
      setOpen(false);
    }
  };
  const handleClick1 = (e) => {
    if (button2 !== true) {
      setButton1(false);
      setButton2(true);
      setStyle1("button11");
      setStyle2("button22");
      setOpen(true);
    }
  };
  const handleClick2 = (e) => {
    if (button3 !== true) {
      setButton3(true);
      setButton4(false);
      setStyle3("button1");
      setStyle4("button2");
      setOpen1(false);
    }
  };
  const handleClick3 = (e) => {
    if (button4 !== true) {
      setButton3(false);
      setButton4(true);
      setStyle3("button11");
      setStyle4("button22");
      setOpen1(true);
    }
  };

  useEffect(() => {
    setStyle1("button1");
    setStyle2("button2");
    setStyle3("button1");
    setStyle4("button2");
    setOpen(false);
    setOpen1(false);
    setSearch("india");
  }, []);

  return (
    <div className="formDivv">
      <div className="head">
        <span className="heading">Campagin Setting</span>
        <span className="nonhead">(Step 3 of 4)</span>
      </div>
      <div className="budget">
        <span className="number">1</span>
        <span className="info">Budget and dates info</span>
        <span className="timeline">Budget Timeline</span>
        <div className="buttonOverlap">
          <div className={style1} onClick={handleClick}>
            Lifetime
          </div>
          <div className={style2} onClick={handleClick1}>
            Daily
          </div>
        </div>
        <div className="calendar">
          <CalendarComp />
          <CalendarComp1 />
        </div>

        <div className="slider">
          <Box sx={{ minWidth: 10 }} className="box">
            <FormControl fullWidth>
              <InputLabel className="inpy">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={search}
                label="Platform"
              >
                <MenuItem value={"india"}>IND</MenuItem>
                <MenuItem value={"us"}>US</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {search === "india" ? (
            <Range
              className="range"
              marks={{
                1: "₹1",
                100000: "₹100000",
              }}
              min={1}
              max={100000}
              defaultValue={[1, 100000]}
              tipFormatter={(value) => `₹${value}`}
              tipProps={{
                placement: "top",
                visible: true,
              }}
              value={val}
              onChange={(value) => setVal(value)}
            />
          ) : (
            <Range
              marks={{
                1: "$1",
                100000: "$1221.61",
              }}
              min={1}
              max={1221.61}
              defaultValue={[1, 1221.61]}
              tipFormatter={(value) => `$${value}`}
              tipProps={{
                placement: "top",
                visible: true,
              }}
              value={val}
              onChange={(value) => setVal(value)}
            />
          )}
        </div>
      </div>
      <div className="budget budget2">
        <span className="number">2</span>
        <span className="info">Location info</span>
        <span className="timeline">Location Type</span>
        <div className="buttonOverlap">
          <div className={style3} onClick={handleClick2}>
            Location
          </div>
          <div className={style4} onClick={handleClick3}>
            Radius
          </div>
        </div>
        <div className={open === false ? "inputContainer1" : "inputContainer"}>
          <span className="inputDesc">Select option</span>
          <input
            type="text"
            className="mainInput"
            placeholder="Select a place name, address or coordinates"
            onChange={(e) => {
              e.preventDefault();
              setLocation(e.target.value);
              console.log(e.target.value);
              localStorage.setItem("location", e.target.value);
            }}
          />
          <FlareIcon className="flareIcon" />
        </div>
        {open1 === true ? (
          <div className="slider">
            <Range
              className="range1"
              marks={{
                1: "1",
                30: "30",
              }}
              min={1}
              max={30}
              defaultValue={[1, 30]}
              tipFormatter={(value) => `${value}km`}
              tipProps={{
                placement: "top",
                visible: true,
              }}
              value={val1}
              onChange={(value) => setVal1(value)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default From3;

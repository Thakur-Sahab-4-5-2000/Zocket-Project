import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form1 from "../../components/form/Form1";
import Form2 from "../../components/form/Form2";
import Form3 from "../../components/form/Form3";
import Form4 from "../../components/form/Form4";
import { useState, useEffect } from "react";
import StepNavigation from "../../components/stepProgressBar/stepNavigation";
import { Link } from "react-router-dom";
import axios from "axios";

const New = ({}) => {
  const [page, setPage] = useState(1);
  const [style, setstyle] = useState("new");
  const [style1, setstyle1] = useState("new1");
  const [style2, setstyle2] = useState("sidebarSpecial");
  const [style3, setstyle3] = useState("sidebarSpecial1");
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, updateCurrentStep] = useState(1);

  const handleClick = () => {
    console.log(page);
    setPage(page + 1);
    updateStep(currentStep + 1);
  };

  const handleClick1 = () => {
    console.log(page);
    setPage(page - 1);
    updateStep(currentStep - 1);
  };

  const campagin = localStorage.getItem("campagin");
  const budget = localStorage.getItem("budget");
  const location = localStorage.getItem("location");
  const date1 = localStorage.getItem("calendar");
  const date2 = localStorage.getItem("calendar1");
  const img = localStorage.getItem("img");
  const platform = localStorage.getItem("platform");

  const postData = async () => {
    await axios.post("https://zocketshubham.herokuapp.com/prod/create", {
      campagin: campagin,
      clicks: 20,
      budget: budget,
      location: location,
      status: "livenow",
      dateRange: {
        date1: date1,
        date2: date2,
      },
      img: img,
      platform: platform,
    });
    console.log(campagin, budget, location, date1, date2, img, platform);
  };

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <div className={page === 3 ? style1 : style}>
      {page === 3 ? (
        <div className={page === 3 ? style2 : null}>
          <Sidebar />
        </div>
      ) : page === 4 ? (
        <div className={page === 4 ? style3 : null}>
          <Sidebar />
        </div>
      ) : (
        <Sidebar />
      )}
      <div className="newContainer">
        <Navbar />
        <div className="addCamp">
          <span className="head">Your Ad Campagin</span>
          <span className="nonhead">Lanch your ad just in 4 easy steps</span>
        </div>

        <StepNavigation
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />

        <div className="form">
          {page === 1 ? (
            <Form1 />
          ) : page === 2 ? (
            <Form2 />
          ) : page === 3 ? (
            <Form3 />
          ) : page === 4 ? (
            <Form4 />
          ) : null}
        </div>
      </div>
      {page === 3 ? (
        <div className="btnSpecial" onClick={handleClick}>
          Continue
        </div>
      ) : page === 4 ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="lastPageButton1" onClick={postData}>
            Start Campagin
          </div>
        </Link>
      ) : (
        <div className="btn" onClick={handleClick}>
          Continue
        </div>
      )}
      {page === 3 ? (
        <div className="btnSpecial1" onClick={handleClick1}>
          Prev
        </div>
      ) : page === 1 ? null : page === 4 ? (
        <div className="lastPageButton2" onClick={handleClick1}>
          Prev
        </div>
      ) : (
        <div className="btn1" onClick={handleClick1}>
          Prev
        </div>
      )}
    </div>
  );
};

export default New;

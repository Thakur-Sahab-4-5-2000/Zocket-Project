import React, { useState, useEffect } from "react";
import "./form2.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

const From2 = () => {
  const [data, setData] = useState([]);

  const handleClick = (e, id) => {
    const arrData = data.filter((data) => data._id === id);

    console.log(arrData[0].name);
    console.log(arrData[0].price);
    console.log(arrData[0].img);
    localStorage.setItem("campagin", arrData[0].name);
    localStorage.setItem("budget", arrData[0].price);
    localStorage.setItem("img", arrData[0].img);
    setData((prev) => {
      return prev.map((item) => {
        if (item._id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://zocketshubham.herokuapp.com/camp");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="formDiv">
      <div className="head">
        <span className="heading">Choose the prdouct</span>
        <span className="nonhead">(Step 2 of 4)</span>
      </div>
      <div className="campagin">
        {data.map((item) => (
          <div
            className="block"
            key={item._id}
            onClick={(e) => handleClick(e, item._id)}
          >
            <CheckCircleIcon
              className={item.isSelected === true ? "done1" : "done"}
            />
            <div className="icons">
              <img src={item.img} className="imgForm" />
            </div>
            <div className="campagindblock">
              <p className="campaginname">{item.name}</p>
              <p className="campagindesc">Rs.{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default From2;

import React, { useState } from "react";
import "./form1.scss";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MessageIcon from "@mui/icons-material/Message";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import NearMeIcon from "@mui/icons-material/NearMe";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const From1 = () => {
  const list = [
    {
      id: 1,
      name: "Get Lead as calls",
      desc: "Reach Board audience and get leads through calls",
      icon: <PhoneCallbackIcon />,
      selected: false,
      platform: "google",
    },
    {
      id: 2,
      name: "Get Lead as facebook messages",
      desc: "Get more fb message from leads",
      icon: <MessageIcon />,
      selected: false,
      platform: "facebook",
    },
    {
      id: 3,
      name: "Increase page follower",
      desc: "Encourage customer to follow your page",
      icon: <PersonAddAlt1Icon />,
      selected: false,
      platform: "facebook",
    },
    {
      id: 4,
      name: "Get customer leads",
      desc: "Encourage customer to take action",
      icon: <AddReactionIcon />,
      selected: false,
      platform: "facebook",
    },
    {
      id: 5,
      name: "Get more youtube views",
      desc: "Increase orgainc views by obtaining views",
      icon: <RemoveRedEyeIcon />,
      selected: false,
      platform: "youtube",
    },
    {
      id: 6,
      name: "Get more website traffic",
      desc: "Get the right people to visit your website",
      icon: <NearMeIcon />,
      selected: false,
      platform: "instagram",
    },
    {
      id: 7,
      name: "Increase Live store traffic",
      desc: "Drive visit to local store, restruants & dealership",
      icon: <StorefrontIcon />,
      selected: false,
      platform: "google",
    },
    {
      id: 8,
      name: "Increase your app install",
      desc: "Rs:2,456",
      icon: <InstallMobileIcon />,
      selected: false,
      platform: "youtube",
    },
    {
      id: 9,
      name: "Increase the catlouge sale",
      desc: "Drive the sale of your catlouge and get more leads",
      icon: <AssignmentIcon />,
      selected: false,
      platform: "google",
    },
  ];

  const [data, setData] = useState(list);

  const handleClick = (e, id) => {
    e.preventDefault();
    const plat = data.filter((item) => item.id === id);
    console.log(plat[0].platform);
    localStorage.setItem("platform", plat[0].platform);
    console.log(id);
    list.forEach((i) => {
      if (i.id === id) {
        i.selected = !i.selected;
      }
    });
    setData([...list]);
  };

  return (
    <div className="formDiv">
      <div className="head">
        <span className="heading">What do you want to do?</span>
        <span className="nonhead">(Step 1 of 4)</span>
      </div>
      <div className="campagin">
        {data.map((item) => (
          <div
            className="block"
            key={item.id}
            onClick={(e) => handleClick(e, item.id)}
          >
            <CheckCircleIcon
              className={item.selected === true ? "done1" : "done"}
            />
            <div className={item.selected === true ? "icons1" : "icons"}>
              {item.icon}
            </div>
            <div className="campagindblock">
              <p className="campaginname">{item.name}</p>
              <p className="campagindesc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default From1;

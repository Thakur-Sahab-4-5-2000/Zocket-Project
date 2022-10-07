import * as React from "react";
import Switch from "@mui/material/Switch";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import DownloadingRoundedIcon from "@mui/icons-material/DownloadingRounded";
const label = { inputProps: { "aria-label": "Switch demo" } };

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export const userColumns = [
  {
    field: "on/off",
    headerName: "On/Off",
    renderCell: (params) => {
      return <Switch {...label} />;
    },
  },
  {
    field: "campagin",
    headerName: "Capamgin",
    width: 270,
    renderCell: (params) => {
      const currentDate = new Date(params.row.date);
      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const dateString =
        currentDayOfMonth + " " + toMonthName(currentMonth) + " " + currentYear;
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          <div>
            <span class="campSpan">{params.row.campagin}</span>
            <span class="campSpan1">{dateString}</span>
          </div>
        </div>
      );
    },
  },
  {
    field: "dateRange",
    headerName: "Date Range",
    width: 229,
    renderCell: (params) => {
      // const currentDate = params.row.dateRange.date1;
      const currentDate = new Date(params.row.dateRange.date1);
      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const dateString =
        currentDayOfMonth + " " + toMonthName(currentMonth) + " " + currentYear;

      const currentDate1 = new Date(params.row.dateRange.date1);
      const currentDayOfMonth1 = currentDate1.getDate();
      const currentMonth1 = currentDate1.getMonth();
      const currentYear1 = currentDate1.getFullYear();
      const dateString1 =
        currentDayOfMonth1 +
        " " +
        toMonthName(currentMonth1) +
        " " +
        currentYear1;

      return (
        <span className="spanu">
          {dateString}-{dateString1}
        </span>
      );
    },
  },

  {
    field: "clicks",
    headerName: "Clicks",
    width: 60,
  },

  {
    field: "budget",
    headerName: "Budget",
    width: 80,
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },

  {
    field: "platform",
    headerName: "Platform",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="social">
          {params.row.platform === "google" ? (
            <GoogleIcon />
          ) : params.row.platform === "youtube" ? (
            <SubscriptionsOutlinedIcon />
          ) : params.row.platform === "instagram" ? (
            <DownloadingRoundedIcon />
          ) : params.row.platform === "facebook" ? (
            <FacebookOutlinedIcon />
          ) : (
            <TagOutlinedIcon />
          )}
        </div>
      );
    },
  },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./dateRangePicker.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const CalendarComp = () => {
  const [calendar, setCalendar] = useState("");

  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    setCalendar(format(new Date(), "yyyy-MM-dd"));

    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSelect = (date) => {
    console.log(
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
    );
    const newDate = new Date(date);
    localStorage.setItem("calendar", newDate);
    setCalendar(format(date, "yyyy-MM-dd"));
  };

  return (
    <div className="calendarWrap">
      <input
        value={calendar}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne} className="calendarscss">
        {open && (
          <Calendar
            date={new Date()}
            onChange={handleSelect}
            className="calendarElement"
          />
        )}
        <div className="iconCalender">
          <CalendarMonthIcon />
        </div>
      </div>
    </div>
  );
};

export default CalendarComp;

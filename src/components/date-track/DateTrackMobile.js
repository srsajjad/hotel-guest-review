import React from "react";
import "./DateTrack.css";

const DateTrack = props => {
  const { time, name } = props;

  return (
    <div className="date-track">
      <p>
        <span style={{ color: "orange", fontSize: "14px" }}>{name}</span> -
        Review reminder and leave a review
      </p>
      <p className="time">{time}</p>
    </div>
  );
};

export default DateTrack;

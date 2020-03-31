import React from "react";
import "./DateTrack.css";

const DateTrack = props => {
  const { time, name, serial } = props;

  return (
    <div
      style={{
        transform:
          serial % 2 == 0 ? `translate(-107%, 100%)` : `translate(7%, 100%)`,
        textAlign: serial % 2 == 0 ? `right` : `left`
      }}
      className="date-track"
    >
      <p>{name}</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTrack;

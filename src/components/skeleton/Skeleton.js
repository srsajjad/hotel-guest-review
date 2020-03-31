import React, { useState, useEffect } from "react";
import MsgBox from "../msgbox/MsgBox";
import MsgBoxMobile from "../msgbox/MsgBoxMobile";
import DateTrack from "../date-track/DateTrack";
import DateTrackMobile from "../date-track/DateTrackMobile";

import dayjs from "dayjs";
import "./Skeleton.css";

const Skeleton = props => {
  const { msg, serial } = props;
  const { name, checkoutDate } = msg;
  const [mobile, setMobile] = useState(false);

  // day JS operations
  const d = dayjs.unix(checkoutDate);
  const am = d.format("A");
  const mnt = d.format("mm");
  const day = d.format("D");
  const hour = d.format("h");
  const month = d.format("MMM");
  const dayName = d.format("ddd");
  const time = `${dayName}, ${month} ${day} at ${hour}:${mnt} ${am}`;

  // track mobile or desktop
  useEffect(() => {
    function reportWindowSize() {
      setMobile(window.innerWidth <= 1000);
    }

    window.addEventListener("resize", reportWindowSize);
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  if (mobile) {
    return (
      <div className="skeleton skeleton-mobile">
        <DateTrackMobile name={name} time={time} />
        <MsgBoxMobile msg={msg} />
      </div>
    );
  }

  return (
    <div className="skeleton">
      <DateTrack name={name} time={time} serial={serial} />
      <MsgBox msg={msg} serial={serial} />
    </div>
  );
};

export default Skeleton;

import React from "react";
import MsgBox from "../msgbox/MsgBox";
import DateTrack from "../date-track/DateTrack";

import dayjs from "dayjs";
import "./Skeleton.css";

const MobileSkeleton = props => {
  const { msg, serial } = props;
  const { name, checkoutDate } = msg;

  // day JS operations
  const d = dayjs.unix(checkoutDate);
  const am = d.format("A");
  const mnt = d.format("mm");
  const day = d.format("D");
  const hour = d.format("h");
  const month = d.format("MMM");
  const dayName = d.format("ddd");
  const time = `${dayName}, ${month} ${day} at ${hour}:${mnt} ${am}`;

  return (
    <div className="skeleton-mobile">
      <DateTrackMobile name={name} time={time} serial={serial} />
      <MsgBoxMobile msg={msg} serial={serial} />
    </div>
  );
};

export default MobileSkeleton;

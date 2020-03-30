import React from "react";
import Message from "../message/Message";
import Review from "../review/Review";
import Listing from "../listing/Listing";
import dayjs from "dayjs";

const MsgBox = props => {
  const { msg } = props;
  const {
    message,
    review,
    reviewMsg,
    name,
    checkoutDate,
    sent,
    isDisabled,
    listing,
    id
  } = msg;

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
    <div style={{ paddingBottom: "10px" }}>
      <Message message={message} />
      <Review review={review} reviewMsg={reviewMsg} />
      <Listing
        listing={listing}
        sent={sent}
        message={message}
        review={review}
        reviewMsg={reviewMsg}
        id={id}
      />
    </div>
  );
};

export default MsgBox;

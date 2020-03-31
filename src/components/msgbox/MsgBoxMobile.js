import React from "react";
import Message from "../message/Message";
import Review from "../review/Review";
import Listing from "../listing/Listing";
import "./MsgBox.css";

const MsgBoxMobile = props => {
  const { msg } = props;
  const { message, review, reviewMsg, sent, listing, id } = msg;

  return (
    <div
      style={{
        color: sent ? "#00000082" : "black"
      }}
      className={`msg-box ${sent && "msg-sent"}`}
    >
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

export default MsgBoxMobile;

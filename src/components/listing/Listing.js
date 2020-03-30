import React, { useState } from "react";
import EditDialog from "../edit-dialog/EditDialog";
import "./Listing.css";

const Listing = props => {
  const { listing, sent, message, review, reviewMsg, id } = props;

  const [showSmallPopup, setShowSmallPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleEditMessage = () => {
    setOpen(true);
  };

  const handleEditReview = () => {
    setOpen(true);
  };

  const handleDisable = () => {
    setOpen(true);
  };

  const handleSend = () => {
    alert("Message Sent !");
  };

  return (
    <div>
      <div className="listing-status">
        <p>Status: {sent ? "Sent" : "Not Sent Yet"}</p>
        <p>{listing}</p>
      </div>

      <button
        onClick={() => setShowSmallPopup(!showSmallPopup)}
        variant="outlined"
        color="orange"
        className={`manage-btn ${showSmallPopup && "orange-btn"}`}
      >
        {showSmallPopup && (
          <ul onClick={e => e.stopPropagation()} className="floating-box">
            <li onClick={handleEditMessage}>Eidt Message</li>
            <li onClick={handleEditReview}>Edit Review</li>
            <li onClick={handleDisable}>Disable</li>
            <li onClick={handleSend}>Send Now</li>
          </ul>
        )}
        Manage
      </button>

      <EditDialog
        open={open}
        setOpen={setOpen}
        setShowSmallPopup={setShowSmallPopup}
        message={message}
        review={review}
        reviewMsg={reviewMsg}
        id={id}
      />
    </div>
  );
};

export default Listing;

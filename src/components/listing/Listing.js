import React, { useState } from "react";
import { connect } from "react-redux";
import EditDialog from "../edit-dialog/EditDialog";
import EditIcon from "@material-ui/icons/Edit";
import { msgSlice } from "../../redux/msgSlice";
import SendIcon from "@material-ui/icons/Send";
import "./Listing.css";

const Listing = props => {
  const { listing, sent, message, review, reviewMsg, id, updateSent } = props;

  const [showSmallPopup, setShowSmallPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleEditMessage = () => {
    setOpen(true);
  };

  const handleEditReview = () => {
    setOpen(true);
  };

  // const handleDisable = () => {
  //   // setOpen(true);
  // };

  const handleSend = () => {
    updateSent({ id, sent: true });
    alert("Message Sent !");
    setShowSmallPopup(false);
  };

  // useEffect(() => {
  //   function closePopup() {
  //     setShowSmallPopup(false);
  //   }

  //   document.body.addEventListener("click", closePopup);

  //   return () => document.body.removeEventListener("click", closePopup);
  // }, []);

  return (
    <div className="listing-sec">
      <div className="listing-status">
        <p>
          <span>STATUS:</span>
          <br /> {sent ? "Sent" : "Not Sent Yet"}
        </p>
        <p>
          <span>LISTING:</span>
          <br /> {listing}
        </p>
      </div>

      <button
        onClick={e => {
          e.stopPropagation();
          setShowSmallPopup(!showSmallPopup);
        }}
        variant="outlined"
        color="orange"
        className={`manage-btn ${showSmallPopup && "orange-btn"}`}
        disabled={!!sent}
        style={{ cursor: sent ? "not-allowed" : "pointer" }}
      >
        {showSmallPopup && (
          <ul onClick={e => e.stopPropagation()} className="floating-box">
            <li onClick={handleEditMessage}>
              <EditIcon /> Eidt Message
            </li>
            <li onClick={handleEditReview}>
              <EditIcon /> Edit Review
            </li>
            {/* <li onClick={handleDisable}>Disable</li> */}
            <li onClick={handleSend}>
              {" "}
              <SendIcon /> Send Now
            </li>
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

const updateSent = msgSlice.actions.updateSent;

const mapDispatchToProps = dispatch => ({
  updateSent: payload => dispatch(updateSent(payload))
});

export default connect(null, mapDispatchToProps)(Listing);

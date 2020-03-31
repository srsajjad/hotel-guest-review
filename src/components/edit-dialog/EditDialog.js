import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";

import { msgSlice } from "../../redux/msgSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditDialog(props) {
  const {
    open,
    setOpen,
    setShowSmallPopup,
    id,
    message,
    review,
    reviewMsg,
    updateMessage,
    updateReview,
    updateReviewMsg
  } = props;

  const [localMessage, setLocalMessage] = useState(message);
  const [localReview, setLocalReview] = useState(review);
  const [localReviewMsg, setLocalReviewMsg] = useState(reviewMsg);

  const handleSave = () => {
    setOpen(false);

    // commit
    updateMessage({
      id,
      message: localMessage
    });

    updateReview({
      id,
      review: localReview
    });

    updateReviewMsg({
      id,
      reviewMsg: localReviewMsg
    });

    setShowSmallPopup(false);
  };

  const handleDiscard = () => {
    // go back
    setLocalMessage(message);
    setLocalReview(review);
    setLocalReviewMsg(reviewMsg);

    setOpen(false);
    setShowSmallPopup(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDiscard}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-slide-title">
          Manage Review and Feedback
        </DialogTitle>

        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto"
          }}
        >
          <h4>Write A Message to the Guest</h4>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Write A Message"
            value={localMessage}
            onChange={e => setLocalMessage(e.target.value)}
            style={{ marginBottom: "2rem" }}
          />

          <h4>Write A Review</h4>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Write A Review"
            value={localReviewMsg}
            onChange={e => setLocalReviewMsg(e.target.value)}
            style={{ marginBottom: "2rem" }}
          />

          <TextField
            value={localReview}
            onChange={e => setLocalReview(e.target.value)}
            id="standard-number"
            label="Guest Review (1-5)"
            type="number"
            inputProps={{ min: "1", max: "5", step: "1" }}
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginBottom: "1rem" }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDiscard} color="primary">
            Discard
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const { updateMessage, updateReview, updateReviewMsg } = msgSlice.actions;

const mapDispatchToProps = dispatch => ({
  updateMessage: payload => dispatch(updateMessage(payload)),
  updateReview: payload => dispatch(updateReview(payload)),
  updateReviewMsg: payload => dispatch(updateReviewMsg(payload))
});

export default connect(null, mapDispatchToProps)(EditDialog);

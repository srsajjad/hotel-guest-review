import React from "react";
import "./Review.css";

const Review = props => {
  const { review, reviewMsg } = props;

  return (
    <div className="review-sec">
      <div className="review-point">{review} STAR REVIEW:</div>
      <div className="review-msg">{reviewMsg}</div>
    </div>
  );
};

export default Review;

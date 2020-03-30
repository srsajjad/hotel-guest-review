import React from "react";

const Review = props => {
  const { review, reviewMsg } = props;

  return (
    <div>
      <div>{review} star review</div>
      <div>{reviewMsg}</div>
    </div>
  );
};

export default Review;

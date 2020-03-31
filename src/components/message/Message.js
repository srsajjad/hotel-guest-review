import React from "react";
// import ReactHtmlParser from "react-html-parser";
// import snarkdown from "snarkdown";

const Message = props => {
  const { message } = props;

  return <pre>{message}</pre>;
};

export default Message;

// react html parser

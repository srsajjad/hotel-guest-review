import React from "react";
import ReactHtmlParser from "react-html-parser";
import snarkdown from "snarkdown";

const Message = props => {
  const { message } = props;

  return <div>{ReactHtmlParser(snarkdown(message))}</div>;
};

export default Message;

// react html parser

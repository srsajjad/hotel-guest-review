import React from "react";
import MsgBox from "../msgbox/MsgBox";
import { connect } from "react-redux";

const Dashboard = props => {
  const { msgReducer } = props;

  return (
    <div>
      {msgReducer
        .slice()
        .sort((a, b) => Number(b.checkoutDate) - Number(a.checkoutDate))
        .map((msg, i) => (
          <MsgBox key={i} msg={msg} />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  msgReducer: state.msgReducer
});

export default connect(mapStateToProps, null)(Dashboard);

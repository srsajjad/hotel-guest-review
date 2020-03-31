import React from "react";
import Skeleton from "../skeleton/Skeleton";
import { connect } from "react-redux";

const Dashboard = props => {
  const { msgReducer } = props;

  return (
    <div>
      {msgReducer
        .slice()
        .sort((a, b) => Number(a.checkoutDate) - Number(b.checkoutDate))
        .map((msg, i) => (
          <Skeleton key={i} msg={msg} serial={i} />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  msgReducer: state.msgReducer
});

export default connect(mapStateToProps, null)(Dashboard);

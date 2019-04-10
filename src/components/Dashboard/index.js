import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeList from "../Admin";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <EmployeeList />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(Dashboard);

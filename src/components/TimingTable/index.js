import React from "react";
import { connect } from "react-redux";
import Table from "../common/Table";
import { withRouter } from "react-router-dom";
import get from "lodash/get";

const EmployeeTiming = props => {
  const { employees } = props;
  return <Table title="Employee Timings" data={employees} />;
};

const mapStateToProps = state => ({
  employees: get(state, "employee.employee_time") || {}
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(EmployeeTiming)
);

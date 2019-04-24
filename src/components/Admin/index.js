import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import get from "lodash/get";
import { componentWillMount } from "../../utils/componentWillMount";
import Table from "../common/Table";
import {
  getAllEmployess,
  employeeTimings
} from "../../redux/actions/employeeActions";

const EmployeeList = props => {
  const token = localStorage.getItem("is_admin");
  const { getAllEmployess } = props;
  const checkLocalStorage = () => {
    const params = {
      is_admin: token
    };
    return params;
  };
  componentWillMount(checkLocalStorage, [token], getAllEmployess, {});

  const handleRowClick = async rowEmail => {
    const params = {
      is_superuser: token,
      email: rowEmail
    };
    seeTimings(params);
  };

  const seeTimings = async params => {
    const {
      employeeTimings,
      employeeStatus,
      history: { push }
    } = props;

    await employeeTimings(params);
    push("/employee-time");
    if (employeeStatus.status === 404 || 401) {
      return;
    }
  };

  const { employeeMessage, employees } = props;
  return employeeMessage !== "" ? (
    employeeMessage
  ) : (
    <Table Title="Employees" data={employees} rowClick={handleRowClick} />
  );
};

const mapStateToProps = state => ({
  employees: get(state, "employee.employeelist") || {},
  employeeStatus: get(state, "employee.status") || "",
  employeeMessage: get(state, "employee.message") || ""
});

const mapDispatchToProps = {
  getAllEmployess,
  employeeTimings
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmployeeList)
);

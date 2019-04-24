import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { styles } from "./styles";
import _ from "lodash";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import {
  getAllEmployess,
  employeeTimings
} from "../../redux/actions/employeeActions";

class EmployeeList extends Component {
  state = {
    message: "",
    rowId: null
  };
  componentWillMount() {
    const token = localStorage.getItem("is_admin");
    const params = {
      is_admin: token
    };
    this.props.getAllEmployess(params);
  }

  handleRowClick = async rowEmail => {
    const params = {
      is_superuser: localStorage.getItem("is_admin"),
      email: rowEmail
    };
    this.seeTimings(params);
  };

  async seeTimings(params) {
    const {
      employeeTimings,
      employeeStatus,
      history: { push }
    } = this.props;

    await employeeTimings(params);
    push("/employee-time");
    if (employeeStatus.status === 404 || 401) {
      return;
    }
  }

  renderTableHeading = () => {
    const { employees } = this.props;
    if (employees && !_.isEmpty(employees)) {
      return (
        <TableRow>
          {Object.keys(employees[0]).map(heading => (
            <TableCell key={heading}>{heading}</TableCell>
          ))}
        </TableRow>
      );
    }
  };

  renderTableBody = () => {
    const { employees } = this.props;

    if (employees && !_.isEmpty(employees)) {
      return Object.keys(employees).map(key => {
        return (
          <TableRow
            onClick={() => this.handleRowClick(employees[key].official_email)}
            key={"row-data-" + employees[key].id}
          >
            {Object.values(employees[key]).map(body => (
              <TableCell key={body}>{body}</TableCell>
            ))}
          </TableRow>
        );
      });
    }
  };

  render() {
    const { classes, employeeMessage } = this.props;
    return (
      <div className={classes.layout}>
        <h2 align="center">Employees</h2>
        <Paper className={classes.root}>
          {employeeMessage !== "" ? (
            employeeMessage
          ) : (
            <Table className={classes.table}>
              <TableHead>{this.renderTableHeading()}</TableHead>
              <TableBody>{this.renderTableBody()}</TableBody>
            </Table>
          )}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: _.get(state, "employee.employeelist") || {},
  employeeStatus: _.get(state, "employee.status") || "",
  employeeMessage: _.get(state, "employee.message") || ""
});

const mapDispatchToProps = {
  getAllEmployess,
  employeeTimings
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(EmployeeList))
);

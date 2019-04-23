import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { styles } from "./styles";
import _ from "lodash";
import Btn from "../common/Forms/Button";
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
  componentWillMount() {
    const token = localStorage.getItem("is_admin");
    const params = {
      is_admin: token
    };
    this.props.getAllEmployess(params);
  }

  async seeTimings(e) {
    const {
      employeeTimings,
      history: { push }
    } = this.props;
    const params = {
      email: e.props.employees[0].official_email,
      is_superuser: localStorage.getItem("is_admin")
    };
    await employeeTimings(params);
    push("/employee-time");
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
      return Object.keys(employees).map((key, index) => (
        <TableRow key={index}>
          {Object.values(employees[key]).map(body => (
            <TableCell key={body}>{body}</TableCell>
          ))}
          <Btn
            color="inherit"
            variant="contain"
            onClick={() => this.seeTimings(this)}
          >
            See Timings
          </Btn>
        </TableRow>
      ));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout}>
        <h2 align="center">Employees</h2>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>{this.renderTableHeading()}</TableHead>
            <TableBody>{this.renderTableBody()}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: _.get(state, "employee.employeelist") || {}
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

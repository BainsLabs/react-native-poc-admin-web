import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { styles } from "./styles";
import _ from "lodash";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getAllEmployess } from "../../redux/actions/employeeActions";

class EmployeeList extends Component {
  componentWillMount() {
    const token = localStorage.getItem("is_admin");
    const params = {
      is_admin: token
    };
    this.props.getAllEmployess(params);
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
  employees: _.get(state, "employee") || {}
});

const mapDispatchToProps = {
  getAllEmployess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EmployeeList));

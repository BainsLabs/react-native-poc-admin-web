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
import EmployeeTimings from "../TimingTable";
import {
  getAllEmployess,
  employeeTimings
} from "../../redux/actions/employeeActions";

class EmployeeList extends Component {
  state = {
    expandedRows: [],
    rowId: null
  };
  componentWillMount() {
    const token = localStorage.getItem("is_admin");
    const params = {
      is_admin: token
    };
    this.props.getAllEmployess(params);
  }

  handleRowClick = async (rowId, rowEmail) => {
    this.setState({
      rowId
    });
    const { employeeTimings } = this.props;
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter(id => id !== rowId)
      : currentExpandedRows.concat(rowId);
    const params = {
      is_superuser: localStorage.getItem("is_admin"),
      email: rowEmail
    };
    await employeeTimings(params);
    this.setState({ expandedRows: newExpandedRows });
  };

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
    const { expandedRows, rowId } = this.state;
    if (employees && !_.isEmpty(employees)) {
      let itemRows = [
        ...Object.keys(employees).map(key => {
          return (
            <TableRow
              onClick={() =>
                this.handleRowClick(
                  employees[key].id,
                  employees[key].official_email
                )
              }
              key={"row-data-" + employees[key].id}
            >
              {Object.values(employees[key]).map(body => (
                <TableCell key={body}>{body}</TableCell>
              ))}
            </TableRow>
          );
        })
      ];

      if (expandedRows.includes(rowId)) {
        itemRows.splice(rowId, 0, <EmployeeTimings />);
      }
      return itemRows;
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

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

class Table extends Component {
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
          <TableRow key={"row-data-" + employees[key].id}>
            {Object.values(employees[key]).map(body => (
              <TableCell key={body}>{body}</TableCell>
            ))}
          </TableRow>
        );
      });
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

export default withStyles(styles)(Table);

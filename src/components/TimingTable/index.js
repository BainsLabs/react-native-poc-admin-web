import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { employeeTimings } from "../../redux/actions/employeeActions";

class TimingList extends Component {
  renderTableHeading = () => {
    const { employees } = this.props;
    if (employees && !_.isEmpty(employees)) {
      return (
        <TableRow>
          {Object.keys(employees).map(heading => (
            <TableCell key={heading}>{heading}</TableCell>
          ))}
        </TableRow>
      );
    }
  };

  renderTableBody = () => {
    const { employees } = this.props;
    if (employees && !_.isEmpty(employees)) {
      //   return Object.keys(employees).map(key => (
      //     // <TableRow key={key}>
      //     //   {Object.values(employees[key]).map(body => (
      //     //     <TableCell key={body}>{body}</TableCell>
      //     //   ))}
      //     // </TableRow>
      //   // ));
      // }
    }
  };

  render() {
    return (
      <Fragment>
        <TableHead>{this.renderTableHeading()}</TableHead>
        <TableBody>{this.renderTableBody()}</TableBody>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  employees: _.get(state, "employee.employee_time") || {}
});

export default withRouter(
  connect(
    mapStateToProps,
    { employeeTimings }
  )(TimingList)
);

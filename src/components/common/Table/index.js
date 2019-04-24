import React, { Component } from "react";
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

class TableComponent extends Component {
  renderTableHeading = () => {
    const { data } = this.props;
    if (data && !_.isEmpty(data)) {
      return (
        <TableRow>
          {Object.keys(data[0]).map(heading => (
            <TableCell key={heading}>{heading}</TableCell>
          ))}
        </TableRow>
      );
    }
  };

  renderTableBody = () => {
    const { data, rowClick } = this.props;
    if (data && !_.isEmpty(data)) {
      return Object.keys(data).map(key => {
        return (
          <TableRow
            onClick={rowClick ? () => rowClick(data[key].official_email) : null}
            key={"row-data-" + data[key].id}
          >
            {Object.values(data[key]).map(body => (
              <TableCell key={body}>{body}</TableCell>
            ))}
          </TableRow>
        );
      });
    }
  };

  render() {
    const { classes, Title } = this.props;
    return (
      <div className={classes.layout}>
        <h2 align="center">{Title}</h2>
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

export default withRouter(withStyles(styles)(TableComponent));

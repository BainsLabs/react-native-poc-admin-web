import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Type from "../Typography";
import Btn from "../Forms/Button";
import "./navbar.scss";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class Navbar extends Component {
  logout = () => {
    const {
      history: { push }
    } = this.props;
    localStorage.clear();
    push("/");
  };

  render() {
    const { classes, history } = this.props;
    const token = localStorage.getItem("userToken");
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Type variant="h6" color="inherit" className={classes.grow}>
              <ul>
                <li>
                  <Btn color="inherit">BAINSLABS DASHBOARD</Btn>
                </li>
              </ul>
            </Type>
            {token ? (
              <Btn color="inherit" onClick={this.logout}>
                Logout
              </Btn>
            ) : null}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Type from "../common/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "./styles";
import {} from "../../redux/actions/employeeActions";
import Snackbar from "../common/Snackbar";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    SnackbarOpen: false,
    SnackbarMessage: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const {
      publisherLogin,
      history: { push }
    } = this.props;
    const coppiedState = Object.assign({}, this.state);
    const { SnackbarMessage, SnackbarOpen, ...params } = coppiedState;
    // const res = await publisherLogin(params);
    // if (res.status === 200) {
    //   console.log(res, "user");
    //   localStorage.setItem("userToken", res.token);
    //   if (res.user.is_admin) {
    //     localStorage.setItem("isAdmin", res.user.is_admin);
    //   }
    // } else {
    //   this.setState({
    //     SnackbarOpen: true,
    //     SnackbarMessage: res.message
    //   });
    // }
  };

  render() {
    const { classes } = this.props;
    const { username, password, SnackbarMessage, SnackbarOpen } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Type component="h1" variant="h5">
            Sign in
          </Type>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Email Address</InputLabel>
              <Input
                id="username"
                name="username"
                autoFocus
                value={username}
                onChange={this.onChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={this.onChange}
              />
            </FormControl>
            <Link to="/forget-password">Forgot Password?</Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
        <Snackbar
          message={SnackbarMessage}
          open={SnackbarOpen}
          close={() =>
            this.setState({
              SnackbarOpen: false
            })
          }
        />
      </main>
    );
  }
}
const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SignIn));

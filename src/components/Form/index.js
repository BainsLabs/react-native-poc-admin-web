import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Btn from "../common/Forms/Button";
import EmployeeForm from "./EmployeeForm";
import SimpleSnackbar from "../common/Snackbar";
import Loader from "../common/Loader";
import { styles } from "./styles";
import { submitEmployee } from "../../redux/actions/employeeActions";

class Checkout extends Component {
  state = {
    showSnackbar: false,
    showLoader: false,
    official_email: "",
    personal_email: "",
    employee_id: "",
    p_address: "",
    c_address: "",
    user_image: "",
    name: "",
    snackbar_message: ""
  };

  onChange = (index, e) => {
    if (typeof index === "object") {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  onFileDrop = file => {
    const formData = new FormData();
    formData.append("file", file[0]);
    console.log(formData.get("file"));
    this.setState({
      user_image: formData
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      showSnackbar: false
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.dir(this.state, "state");
    const {
      history: { push },
      submitEmployee
    } = this.props;
    this.setState({
      showLoader: true,
      disable: true
    });
    const coppiedState = Object.assign({}, this.state);
    const {
      showSnackbar,
      showLoader,
      snackbar_message,
      disable,
      ...params
    } = coppiedState;
    const res = await submitEmployee(params);
    this.setState({
      snackbar_message: res.message,
      showSnackbar: true,
      showLoader: false
    });
  };

  renderForms = () => {
    const {
      official_email,
      personal_email,
      employee_id,
      p_address,
      c_address,
      user_image,
      name
    } = this.state;
    return (
      <EmployeeForm
        Name={name}
        officialEmail={official_email}
        personalEmail={personal_email}
        employeeId={employee_id}
        permanentAddress={p_address}
        currentAddress={c_address}
        userImage={user_image}
        fileDrop={this.onFileDrop}
        change={this.onChange}
      />
    );
  };

  render() {
    const { classes } = this.props;
    const { showSnackbar, showLoader, snackbar_message } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Fragment>{this.renderForms()}</Fragment>
          </Paper>
          <div align="center">
            {showLoader ? (
              <Loader color="primary" />
            ) : (
              <Btn onClick={this.handleSubmit}>Submit</Btn>
            )}
          </div>
        </main>

        <SimpleSnackbar
          message={snackbar_message}
          open={showSnackbar}
          close={this.handleCloseSnackbar}
        />
      </Fragment>
    );
  }
}

export default connect(
  null,
  { submitEmployee }
)(withStyles(styles)(Checkout));

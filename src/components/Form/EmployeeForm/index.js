import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Type from "../../common/Typography";
import Input from "../../common/Forms/TextField";
import Dropzone from "react-dropzone";
import Typography from "@material-ui/core/Typography";

class EmployeeForm extends Component {
  state = {
    checked: false
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    const {
      Name,
      officialEmail,
      personalEmail,
      employeeId,
      permanentAddress,
      currentAddress,
      fileDrop,
      userImage = {},
      change
    } = this.props;
    const { checked } = this.state;
    console.log((userImage && userImage[0]) || "", "image");
    return (
      <Fragment>
        <Type variant="h6" gutterBottom>
          Employee Details
        </Type>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Dropzone
              onDrop={acceptedFiles => fileDrop(acceptedFiles)}
              style={{
                borderWidth: 0.3,
                borderRadius: 80,
                height: 200,
                width: 200,
                textAlign: "center"
              }}
              accept="image/*"
            >
              {userImage ? (
                <img
                  alt="employee"
                  src={userImage[0].preview}
                  style={{ borderRadius: 100, height: 200, width: 200 }}
                />
              ) : (
                <Typography variant="subtitle1" style={{ margin: 50 }}>
                  Drop or Select Image
                </Typography>
              )}
            </Dropzone>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Input
              required
              id="name"
              name="name"
              label="Name"
              value={Name}
              fullWidth
              onChange={e => change(this, e)}
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              required
              id="email"
              name="official_email"
              label="Company Email"
              value={officialEmail}
              fullWidth
              type="email"
              onChange={e => change(this, e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="personalEmail"
              name="personal_email"
              label="Personal Email"
              value={personalEmail}
              fullWidth
              type="email"
              onChange={e => change(this, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              required
              id="employeeId"
              name="employee_id"
              label="Employee-Id"
              value={employeeId}
              fullWidth
              onChange={e => change(this, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              required
              id="permanentAddress"
              name="p_address"
              label="Permanent-Address"
              value={permanentAddress}
              fullWidth
              onChange={e => change(this, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              id="currentAddress"
              name="c_address"
              label="Current-Address"
              value={currentAddress}
              fullWidth
              disabled={checked}
              onChange={e => change(this, e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  onChange={this.handleChange}
                  value="checked"
                />
              }
              label="Same as Permanent Address"
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default EmployeeForm;

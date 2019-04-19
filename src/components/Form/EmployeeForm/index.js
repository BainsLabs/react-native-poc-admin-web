import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Type from "../../common/Typography";
import Input from "../../common/Forms/TextField";
import Dropzone from "react-dropzone";

class EmployeeForm extends Component {
  state = {
    checked: false
  };

  handleChange = checked => {
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
      userImage,
      fileDrop,
      change
    } = this.props;
    const { checked } = this.state;
    return (
      <Fragment>
        <Type variant="h6" gutterBottom>
          Employee Details
        </Type>
        <Grid container spacing={24}>
          <Grid item xs={12}>
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
                  onChange={() => this.handleChange("checked")}
                  value="checked"
                />
              }
              label="Same as Permanent Address"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Dropzone
              onDrop={acceptedFiles => fileDrop(acceptedFiles)}
              style={{}}
              accept="image/*"
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
            {/* <input
              type="file"
              multiple={false}
              name="user_image"
              ref={input => {
                this.inpuElement = input;
              }}
              accept=".jpg,.jpeg,.png"
              onChange={e => change(this, e)}
            /> */}
            {/* <Input
              id="userImage"
              name="user_image"
              label="Employee-Image"
              value={userImage}
              fullWidth
              type="file"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => change(this, e)}
            /> */}
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default EmployeeForm;

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    color: "#fff"
  }
});

class Loader extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 10 });
  };

  render() {
    const { classes, color } = this.props;
    return (
      <div>
        <CircularProgress
          className={color ? "loader-container" : classes.progress}
          variant="static"
          value={this.state.completed}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Loader);

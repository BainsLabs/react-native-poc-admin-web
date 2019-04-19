import React, { Fragment } from "react";
import SignIn from "./components/Signin";
import Navbar from "./components/common/Navbar";
import Dashboard from "./components/Dashboard";
import "semantic-ui-container/container.min.css";
import Form from "./components/Form";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/privateRoutes";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </MuiThemeProvider>
  </Fragment>
);

export default App;

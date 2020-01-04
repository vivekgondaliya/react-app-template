import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginForm from './components/Login';
import MainProject from "./components/MainProject";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <Route path="/" component={MainProject} />
                </Switch>
            </div>
        )
    }
}

export default App;

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    const user_isAuthenticated = true;
    return (
      <Route
        {...rest}
        render={({ location }) =>
        user_isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}
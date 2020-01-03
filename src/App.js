import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import TopNavigation from './components/TopNavigation';
import ContentContainer from "./components/ContentContainer";
import About from './components/About';
import NotFound from './components/NotFound';
import LoginForm from './components/Login';
import SideNavigation from './components/SideNavigation';

class App extends Component {
    render() {
        return (
            <div>
                {/* <TopNavigation />
                <SideNavigation /> */}
                <Switch>
                    <Route exact path="/login" component={LoginForm} />
                    <PrivateRoute path="/">
                        <ContentContainer />
                    </PrivateRoute>
                    <PrivateRoute path="/about">
                        <About />
                    </PrivateRoute>
                    <Route component={NotFound} />
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
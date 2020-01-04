import React from 'react'
import { Route, Switch } from 'react-router-dom';

import SideNavigation from './SideNavigation';
import NotFound from './NotFound';
const Layout = () => {
    return (
        <Switch>
            <Route path='/' exact component={SideNavigation} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Layout;
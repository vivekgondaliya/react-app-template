import React from 'react'
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Section from './Section';

const ContentContainer = () => {
    return (
        <Switch>
            <Route path='/section' component={Section} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default ContentContainer;
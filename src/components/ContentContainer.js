import React from 'react'
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import AnotherSection from './AnotherSection';
import Section from './Section';
import Home from './Home';

const ContentContainer = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/section' component={Section} />
            <Route path='/another-section' component={AnotherSection} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default ContentContainer;
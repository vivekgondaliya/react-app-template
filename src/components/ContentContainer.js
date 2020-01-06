import React from 'react'
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import AnotherSection from './AnotherSection';
import Section from './Section';
import Home from './Home';

const ContentContainer = () => {
    return (
        <div>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/section' component={Section} />
                <Route path='/another-section' component={AnotherSection} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default ContentContainer;
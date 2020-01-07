import React from 'react'
import { Route, Switch } from 'react-router-dom';

import NotFound from './misc/NotFound';
import AnotherSection from './menu-links/AnotherSection';
import Section from './menu-links/Section';
import Home from './menu-links/Home';

const ContentContainer = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/section' component={Section} />
                <Route path='/another-section' component={AnotherSection} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default ContentContainer;
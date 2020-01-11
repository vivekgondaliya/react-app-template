import React from 'react'
import { Route, Switch } from 'react-router-dom';

import NotFound from './misc/NotFound';
import AnotherSection from './menu-links/AnotherSection';
import Home from './menu-links/Home';
import FormComponent from './menu-links/FormComponent';


const ContentContainer = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/form-component' component={FormComponent} />
                <Route path='/another-section' component={AnotherSection} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default ContentContainer;
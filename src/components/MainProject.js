import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

import TopNavigation from './TopNavigation';
import NotFound from './NotFound';

function MainProject(){
    return (
        <div>
            <TopNavigation />
            <Route component={NotFound} />
        </div>
    )
}

export default MainProject;
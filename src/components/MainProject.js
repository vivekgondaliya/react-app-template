import React from 'react';
import { Redirect } from 'react-router-dom';

import TopNavigation from './TopNavigation';
import Layout from './Layout';

import isLoggedIn from '../helpers/is_logged_in';

function MainProject(props){
    if (!isLoggedIn()) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            {/* below components will load on all pages */}
            <TopNavigation {...props}/>
            <Layout />
        </div>
    )
}

export default MainProject;
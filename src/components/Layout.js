import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import TopNavigation from './TopNavigation';
import SideNavigation from './SideNavigation';
import ContentContainer from './ContentContainer';

import isLoggedIn from '../helpers/is_logged_in';

function Layout(props){
    if (!isLoggedIn()) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            {/* below components will load on all pages */}
            <TopNavigation />
            <Grid>
                <Grid.Column width={3}>
                    <SideNavigation />
                </Grid.Column>

                <Grid.Column width={13}>
                    <ContentContainer />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Layout;
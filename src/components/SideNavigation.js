import React, { Component } from 'react'
import { Grid, Menu, Link, Icon} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class SideNavigation extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        this.props.history.push(`/${name}`);
    }

    render() {
        const { activeItem } = this.state

        return (
        <Grid>
            <Grid.Column width={6}>
            <Menu pointing secondary vertical>
                <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                />
                <Menu.Item
                name='section'
                active={activeItem === 'section'}
                onClick={this.handleItemClick}
                />
            </Menu>
            </Grid.Column>
        </Grid>
        )
    }
}

export default withRouter(SideNavigation);
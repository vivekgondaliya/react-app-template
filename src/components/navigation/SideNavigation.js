import React, { Component } from 'react'
import { Menu, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import DissmissibleMessage from '../misc/DissmissibleMessage';


class SideNavigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if(name === 'home'){
      this.props.history.push('/');
      return;
    }
    this.props.history.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical style={{ 'display': 'inline-block','minHeight': '100vh', 'minWidth': '100%'}}>
        <Menu.Item
          icon='home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon= 'file alternate'
          name='section'
          active={activeItem === 'section'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          icon= 'file alternate outline'
          name='another-section'
          active={activeItem === 'another-section'}
          onClick={this.handleItemClick}
        />
        <DissmissibleMessage 
          header='TODO'
          content='Responsiveness Pending'
          color='blue'
        />
      </Menu>
    )
  }
}

export default withRouter(SideNavigation)

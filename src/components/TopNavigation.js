import React from 'react'
import {
  Dropdown,
  Image,
  Menu,
  Icon,
  Grid
} from 'semantic-ui-react'

import { withRouter, Link } from 'react-router-dom';
import { Component } from 'react';

class TopNavigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      this.props.history.push(`/${nasdme}`);
  }

  render(){
    const { activeItem } = this.state;
    return (
      <Menu size="large">
          <Menu.Item header>
            <Image size='mini' src='https://cdn3.iconfinder.com/data/icons/ui-glynh-blue-02-of-5/100/UI_Blue_2_of_3_11-512.png' style={{ marginRight: '1.5em' }} />
            Project Title
          </Menu.Item>
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
  
          <Menu.Menu position='right'>
            <Dropdown
              text='Hello, John Doe'
              item
              simple
            >
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item as={ Link } name="logout" to="/"><Icon name="log out"/>LOGOUT</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
      </Menu>
    )
  }
}
  

export default withRouter(TopNavigation);
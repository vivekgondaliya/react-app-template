import React , { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Image, Menu, Icon, Header } from 'semantic-ui-react';

import store  from 'store';

class TopNavigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if(name === 'home'){
      this.props.history.push('/');
      return;
    }
    this.props.history.push(`/${name}`);
  }
  
  handleLogout = () => {
    store.remove('loggedIn');
    this.props.history.push('/login');
  };

  render(){
    const { activeItem } = this.state;
    const username = 'John Smith';

    return (
      <Menu>
        <Menu.Item header>
          <Image size='mini' src='https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/559/icon-weather-sunny-512.png' style={{ marginRight: '1.5em' }} />
          Project Title
        </Menu.Item>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='form-component'
          active={activeItem === 'form-component'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='another-section'
          active={activeItem === 'another-section'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right' >
          <Menu.Item>
            <Header as='h5' >
              <Icon name='user' />
              {username}
            </Header>
          </Menu.Item>
          <Dropdown item simple text='Account' style={{'marginRight': '30px'}}>
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
              <Dropdown.Item onClick={this.handleLogout}><Icon name='log out' />LOGOUT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}
  

export default withRouter(TopNavigation);
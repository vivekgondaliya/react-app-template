import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

import store  from 'store';

function handleLogout(history){
  store.remove('loggedIn');
  history.push('/login');
};

function TopNavigation(props){
  return (
    <Menu>
      <Menu.Item as='a' header>
        <Image size='mini' src='https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/559/icon-weather-sunny-512.png' style={{ marginRight: '1.5em' }} />
        Project Title
      </Menu.Item>
      <Menu.Item><Link to="/">Home</Link></Menu.Item>
      <Menu.Item><Link to="/section">Section</Link></Menu.Item>
      <Menu.Item><Link to="/another-section">Another Section</Link></Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown item simple text='Dropdown'>
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
            <Dropdown.Item onClick={() => handleLogout(props.history)}>LOGOUT</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}
  

export default withRouter(TopNavigation);
import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'

import { Link } from 'react-router-dom';

const TopNavigation = (props) => {
  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/559/icon-weather-sunny-512.png' style={{ marginRight: '1.5em' }} />
          Project Title
        </Menu.Item>
        <Menu.Item as={ Link } name="home" to="home"><Icon name="home"/>Home</Menu.Item>
        <Menu.Item as={ Link } name="about" to="about">About Us</Menu.Item>
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
      </Container>
    </Menu>
  )
}
  

export default TopNavigation
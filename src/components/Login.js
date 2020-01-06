import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import store from 'store';

import isLoggedIn from '../helpers/is_logged_in';

class LoginForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    this.setState({ error: false });

    if (!(email === 'admin@drintl.com' && password === 'password1')) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    store.set('loggedIn', true);
    this.props.history.push('/home');
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render(){
    const { error } = this.state;
    if (isLoggedIn()) {
      return <Redirect to="/" />;
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          
          <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
          </Header>
          
          {error && <Message
              error={error}
              content="That email/password is incorrect. Try again!"
            />}

          <Form size='large' error={error} onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                name="email" 
                placeholder='E-mail address'
                onChange={this.handleChange}
                 />
              <Form.Input
                fluid
                name="password"
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.handleChange}
              />

              <Form.Button 
                color='teal' 
                fluid 
                size='large' 
                type="submit"
              > Login
              </Form.Button>

            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { signUp } from '../services/api'

export default class HomePage extends Component {
    state = {
        username: "",
        password: ""
      };
    
      handleSubmit = () => {
        signUp(this.state.username, this.state.password).then(data => {
          if (data.error) {
            alert(data.error);
          } else {
            this.props.login(data);
            this.props.history.push('/my-rooms')
          }
        });
      };
    
      handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
      };

      render() {
        const { handleChange, handleSubmit } = this; 
        const { username, password } = this.state;
        
        return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='/logo.png' /> Sign up for Plant Mom
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Choose a username'
                  type="text" 
                  name="username"
                  value={username} 
                  onChange={handleChange}
              />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Choose a password'
                  type="password" 
                  name="password" 
                  value={password} 
                  onChange={handleChange}
                />
    
                <Button onClick={handleSubmit} color='teal' fluid size='large'>
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      )
    }
}

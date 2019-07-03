import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const Register = props => {
    const { handleChange, handleSubmit, username, password } = props; 
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='green' textAlign='center'>
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
                  placeholder='Pick a password'
                  type='password'
                  type="text" 
                  name="password" 
                  value={password} 
                  onChange={handleChange}
                />
    
                <Button onClick={handleSubmit} color='green' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      )
}

export default Register

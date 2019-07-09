import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = props => {
  const { handleChange, handleSubmit, username, password } = props;

  return (
    <div className="homepage-background">
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Sign in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='Username'
                type="username" 
                name="username"
                value={username} 
                onChange={handleChange}
            />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type="password" 
                name="password" 
                value={password} 
                onChange={handleChange}
              />

              <Button onClick={handleSubmit} color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
          New to us? <Link to="/register">Sign Up</Link>
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
    </div>
  )
}

export default Login
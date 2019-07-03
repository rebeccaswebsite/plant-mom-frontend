import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = props => {
  const { handleChange, handleSubmit, username, password } = props;

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='olive' textAlign='center'>
          <Image src='/logo.png' /> Log in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Username'
              type="text" 
              name="username"
              value={username} 
              onChange={handleChange}
          />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              type="text" 
              name="password" 
              value={password} 
              onChange={handleChange}
            />

            <Button onClick={handleSubmit} color='olive' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
        New to us? <Link to="/register">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login
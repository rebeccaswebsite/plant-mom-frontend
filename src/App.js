import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import MyRooms from './pages/MyRooms'

import { validate } from './services/api'

import './App.css'

class App extends Component {

  state = {
    username: ''
  }

  login = (user) => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
    this.props.history.push('/my-rooms')
  }

  signout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    if (localStorage.token) {
      validate()
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            this.login(data)
          }
        })
    }
  }

  render() {
    const { login } = this
    const { username } = this.state
    return (
      <div >
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={props => <Login login={login} {...props} />} />
          <Route path='/my-rooms' component={props => <MyRooms username={username} {...props} />} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
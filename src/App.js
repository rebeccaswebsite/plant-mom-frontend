import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Login from './pages/Login'
import MyRooms from './pages/MyRooms'
import Navbar from './components/Navbar'
import PlantList from './components/PlantList'

import { validate } from './services/api'

class App extends Component {

  state = {
    username: ""
  }

  login = (user) => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

  logout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    if (localStorage.token && localStorage.token !== 'undefined') {
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
    const { login, logout } = this
    const { username } = this.state
    return (
      <div >
        <Navbar logout={logout} /> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/my-rooms' component={props => <MyRooms username={username} {...props} />} />
          <Route path='/plants' component={PlantList} />
          <Route path='/login' component={props => <Login login={login} {...props} />} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
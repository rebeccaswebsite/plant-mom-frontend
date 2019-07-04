import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import MyRooms from './pages/MyRooms'
import AddDetail from './pages/AddDetail'
import AddRoom from './pages/AddRoom'
import AddPlantsToRoom from './pages/AddPlantsToRoom'
import Navbar from './components/Navbar'
import PlantList from './components/PlantList'

import { validate } from './services/api'

class App extends Component {

  state = {
    user: ""
  }

  login = (user) => {
    this.setState({ user: user})
    localStorage.setItem('token', user.token)
  }

  logout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
    this.props.history.push('/')
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
    const { user } = this.state
    return (
      <div >
        <Navbar logout={logout} /> 
        <Switch>
          <Route exact path='/' component={props => <HomePage login={login} {...props}/>} />
          <Route path='/my-rooms' component={props => <MyRooms user={user} {...props} />} />
          <Route path='/plants' component={PlantList} />
          <Route path='/add-detail' component={AddDetail} />
          <Route path='/add-room' component={props => <AddRoom user={user} {...props} />} />
          <Route path='/add-plants-to-my-room' component={props => <AddPlantsToRoom user={user} {...props} />} />
          <Route path='/login' component={props => <Login {...props} />} />
          <Route path='/register' component={props => <Register login={login} {...props} />} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import MyRooms from './pages/MyRooms'
import AddDetail from './pages/AddDetail'
import AddRoom from './pages/AddRoom'
import Navbar from './components/Navbar'
import PlantList from './components/PlantList'

import { validate, getMyRooms, getPlants } from './services/api'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      plants: [],
      user: "",
      myRooms: []
    }

    this.removeRoom = this.removeRoom.bind(this);
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

  setMyRoom = () => {
    getMyRooms()
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          this.setState({ myRooms: data })
        }
      })
  }

  removeRoom(room){
    const { myRooms } = this.state;
    this.setState({ myRooms: myRooms.filter(el => el.id !== room.id) })
    this.props.history.push('/my-rooms')
  }

  setPlants = () => {
    getPlants()
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          this.setState({ plants: data["plants"] })
        }
      })
  }

  componentDidMount () {
    this.setPlants();
    if (localStorage.token && localStorage.token !== 'undefined') {
      validate()
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            this.login(data)
            this.setMyRoom()
          }
        })
    }
  }

  render() {
    const { login, logout, setMyRoom, removeRoom } = this;
    const { plants, user, myRooms } = this.state;
    return (
      <div >
        <Navbar logout={logout} /> 
        <Switch>
          <Route exact path='/' component={props => <HomePage login={login} {...props}/>} />
          <Route path='/my-rooms' component={props => <MyRooms plants= {plants} user={user} myRooms={myRooms} setMyRoom={setMyRoom} removeRoom={removeRoom} {...props} />} />
          <Route path='/plants' component={props => <PlantList plants={plants} />} />
          <Route path='/add-detail' component={AddDetail} />
          <Route path='/add-room' component={props => <AddRoom user={user} setMyRoom={setMyRoom} {...props} />} />
          <Route path='/login' component={Login} /> />
          <Route path='/register' component={props => <Register login={login} {...props} />} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

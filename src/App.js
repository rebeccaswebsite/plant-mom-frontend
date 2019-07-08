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

import { validate, getMyRooms } from './services/api'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
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

  componentDidMount () {
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
    const { login, logout, removeRoom } = this;
    const { user, myRooms } = this.state;
    return (
      <div >
        <Navbar logout={logout} /> 
        <Switch>
          <Route exact path='/' component={props => <HomePage login={login} {...props}/>} />
          <Route path='/my-rooms' component={props => <MyRooms user={user} myRooms={myRooms} removeRoom={removeRoom} {...props} />} />
          <Route path='/plants' component={PlantList} />
          <Route path='/add-detail' component={AddDetail} />
          <Route path='/add-room' component={props => <AddRoom user={user} {...props} />} />
          <Route path='/login' component={Login} /> />
          <Route path='/register' component={props => <Register login={login} {...props} />} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

// id: 26
// name: "Kitchen"
// plants: Array(1)
// 0: {id: 24, common_name: "Spider plant", img: "/spider_plant.jpg", details: Array(1)}
// length: 1
// __proto__: Array(0)
// user_id: 13
// __proto__: Object

// id:
// 27
// name:
// "Bathroom"
// plants:
// Array[1]
// user_id:
// 13
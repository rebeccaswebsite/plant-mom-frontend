import React from 'react'
import Room from './Room'
import { Route, Link } from 'react-router-dom'
import { getMyRooms } from '../services/api'

class MyRooms extends React.Component {
  // state = {
  //   myRooms: []
  // }

  // setMyRoom = () => {
  //   getMyRooms()
  //     .then(data => {
  //       if (data.error) {
  //         alert(data.error)
  //       } else {
  //         this.setState({ myRooms: data })
  //       }
  //     })
  // }

  componentDidMount () {
    if (!this.props.user) {
      this.props.history.push('/login')
    }
    // } else {
    //   this.setMyRoom()
    // }
  }

  render () {
    const { user, myRooms } = this.props;
    
    return (
      <>
      <Route exact path={this.props.match.url} component={() =>
        <div>
        <h3>Here are your rooms:</h3>
        { myRooms.length === 0 && <p>You don't have any plant rooms yet...</p>}
        {
          myRooms.map(room =>
            <Link to={`/my-rooms/${room.id}`}>
              <h3>
                {room.name}
              </h3>
            </Link>
          )
        }
        <Link to="/add-room">Add a new room</Link>
        </div>
      }/>
      <Route path={this.props.match.url + '/:id'} component={props => {
        const id = props.match.params.id
        const selectedRoom = myRooms.find(room => parseInt(room.id) === parseInt(id))
        if (selectedRoom === undefined) {
          setTimeout(() => props.history.push('/my-rooms'), 3000)
          return <h1>Room: {id} not found! Taking you back to your rooms in 3 seconds!</h1>
        }
  
        return <Room room={selectedRoom} />
      }} />
      </>
    )
  }
}

export default MyRooms

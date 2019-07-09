import React from 'react'
import Room from './Room'
import { Route, Link } from 'react-router-dom'

class MyRooms extends React.Component {
  componentDidMount () {
    if (!this.props.user) {
      this.props.history.push('/login')
    }
  }

  render () {
    const { plants, myRooms, setMyRoom, removeRoom } = this.props;
    
    return (
      <>
      <Route exact path={this.props.match.url} component={() =>
        <div >
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
          // setTimeout(() => props.history.push('/my-rooms'), 3000)
          return <h1>Loading...</h1>
        }
  
        return <Room room={selectedRoom} plants={plants} setMyRoom={setMyRoom} removeRoom={removeRoom} {...props} />
      }} />
      </>
    )
  }
}

export default MyRooms

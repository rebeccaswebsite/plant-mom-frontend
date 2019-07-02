import React from 'react'
import Room from '../components/Room'
import { Link } from 'react-router-dom'
import { getMyRooms } from '../services/api'

class MyRooms extends React.Component {
  state = {
    myRooms: []
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

  componentDidMount () {
    if (!this.props.user) {
      this.props.history.push('/login')
    } else {
      this.setMyRoom()
    }
  }

  render () {
    const { myRooms } = this.state

    return (
      <div >
        <h3>Here are your rooms:</h3>
        { myRooms.length === 0 && <p>You don't have any plant rooms yet...</p>}
        {
          myRooms.map(room =>
            <Room key={room.id} room={room} />
          )
        }
        <Link to="/add-room">Add a new room</Link>
        </div>
    )
  }
}

export default MyRooms

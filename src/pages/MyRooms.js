import React from 'react'

import Room from '../components/Room'

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
    if (!this.props.username) {
      this.props.history.push('/login')
    } else {
      this.setMyRoom()
    }
  }

  render () {
    const { myRooms } = this.state

    return (
      <div >
        <h3>Here's your rooms:</h3>
        { myRooms.length === 0 && <p>You don't have any plant rooms yet..</p>}
        {
          myRooms.map(room =>
            <Room key={item.id} room={room} />
          )
        }
      </div>
    )
  }
}

export default MyRooms

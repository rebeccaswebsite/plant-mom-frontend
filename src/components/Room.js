import React from 'react'

class Room extends React.Component {

  render () {
    const { room } = this.props

    return (
      <div>
          <h1>{room.name}</h1>
      </div>
    )
  }
}

export default Room

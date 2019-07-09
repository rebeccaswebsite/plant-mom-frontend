import React from 'react'
import PlantCard from '../components/PlantCard'
import PlantDropdown from '../components/PlantDropdown'
import { Link } from 'react-router-dom'
import { Card, Button, Divider } from 'semantic-ui-react'
import { deleteRoom, updateRoom } from '../services/api'

class Room extends React.Component {
  handleClick = () => {
    deleteRoom(this.props.room.id)
    this.props.removeRoom(this.props.room);
  }

  handleSubmit = (room_id, plant_id)=> {
    updateRoom(room_id, plant_id)
    this.props.setMyRoom()
  }

  render () {
    const { room, plants } = this.props;    
    return (
      <div>
        <h1>{room.name}</h1>
        <Divider/>
        <Card.Group itemsPerRow={8}>
            {
              room.plants.map((plant,index) => <PlantCard key={index} plant={plant} /> )
            }
            <Link to='/my-rooms'>BACK</Link>
        </Card.Group> 
        <Divider/>
        <PlantDropdown handleSubmit={this.handleSubmit} plants={plants} room={room} />
        <Divider/>
        <Button onClick={this.handleClick}>Delete Room</Button>
      </div>
    )
  }
}

export default Room
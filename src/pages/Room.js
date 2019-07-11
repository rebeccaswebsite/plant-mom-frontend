import React from 'react'
import PlantCard from '../components/PlantCard'
import PlantDropdown from '../components/PlantDropdown'
import { Card, Button, Divider } from 'semantic-ui-react'
import { deleteRoom, updateRoom } from '../services/api'

class Room extends React.Component {
  handleClick = () => {
    deleteRoom(this.props.room.id)
    this.props.removeRoom(this.props.room);
  }

  handleSubmit = (room_id, plant_id)=> {
    updateRoom(room_id, plant_id)
      .then(this.props.setMyRoom)
  }

  goBack = () => {
    this.props.history.push('/my-rooms')
  }

  render () {
    const { room, plants } = this.props;    
    return (
      <div className="room-container">
        <h1>{room.name}</h1>
        <p>Click on a plant to see how to take care of it</p>
        <Divider/>
        <Card.Group itemsPerRow={8}>
            {
              room.plants.map((plant,index) => <PlantCard key={index} plant={plant} /> )
            }
        </Card.Group> 
        <Divider/>
        <PlantDropdown handleSubmit={this.handleSubmit} plants={plants} room={room} />
        <Divider/>
        <Button.Group>
          <Button basic color='teal' onClick={this.goBack}>Go Back</Button>
          <Button basic color='red' onClick={this.handleClick}>Delete Room</Button>
        </Button.Group>
      </div>
    )
  }
}

export default Room
import React from 'react'
import PlantCard from '../components/PlantCard'
import PlantDropdown from '../components/PlantDropdown'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'
import { deleteRoom, updateRoom } from '../services/api'

class Room extends React.Component {
  handleClick = () => {
    deleteRoom(this.props.room.id)
    this.props.removeRoom(this.props.room);
  }

  handleSubmit = plant_id => {
    updateRoom(this.props.room.id, plant_id)
  }

  render () {
    const { room, plants } = this.props;    
    return (
      <div>
        <PlantDropdown handleSubmit={this.handleSubmit} plants={plants} />
        <br/>
        <Card.Group>
          <h3>{room.name}</h3>
            {
              room.plants.map(plant => <PlantCard key={plant.id} plant={plant} /> )
            }
            <Button onClick={this.handleClick}>X</Button>
            <Link to='/my-rooms'>BACK</Link>
        </Card.Group> 
      </div>
    )
  }
}

export default Room
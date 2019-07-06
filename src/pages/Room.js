import React from 'react'
import PlantCard from '../components/PlantCard'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'
import { deleteRoom } from '../services/api'

class Room extends React.Component {
  handleClick = () => {
    deleteRoom(this.props.room.id)
  }

  render () {
    const { room } = this.props;    
    return (
      <div>
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
import React from 'react'
import PlantCard from './PlantCard'
import { Card } from 'semantic-ui-react'

class Room extends React.Component {

  render () {
    const { room } = this.props
    const plants = room.plants

    return (
      <div>
        <Card.Group>
            <h3>{room.name}</h3>
            {
              plants.map(plant => <PlantCard key={plant.id} plant={plant} /> )
            }
        </Card.Group> 
      </div>
    )
  }
}

export default Room

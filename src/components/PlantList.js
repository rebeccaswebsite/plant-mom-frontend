import React, { Component } from 'react'
import { getPlants } from '../services/api'
import { Card } from 'semantic-ui-react'
import PlantCard from '../components/PlantCard'

export default class PlantList extends Component {
    state = {
        plants: []
      }
    
      setPlants = () => {
        getPlants()
          .then(data => {
            if (data.error) {
              alert(data.error)
            } else {
              this.setState({ plants: data["plants"] })
            }
          })
      }
    
      componentDidMount () {
          this.setPlants()
      }
    
      render () {
        const { plants } = this.state
        return (
          <div >
            <h3>Plants</h3>
            <Card.Group>
            { plants.length === 0 && <p>No plants listed yet!</p>}
            {
              plants !== 'undefined'
              ? 
                plants.map(plant =>
                <PlantCard key={plant.id} plant={plant} />
                )
          
              : null
            }
            </Card.Group>
          </div>
        )
      }
    }

    
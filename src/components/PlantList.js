import React, { Component } from 'react'
import { getPlants } from '../services/api'
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
              this.setState({ plants: data })
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
            {
              plants.map(plant =>
                <PlantCard key={plant.id} plant={plant} />
              )
            }
          </div>
        )
      }
    }

import React, { Component } from 'react'
import { getPlants } from '../services/api'
import { Card } from 'semantic-ui-react'
import PlantCard from './PlantCard'
import Search from './Search'

export default class PlantList extends Component {
    state = {
      searchTerm: '',
      plants: [],
      filteredPlants: []
      }
    
      setPlants = () => {
        getPlants()
          .then(data => {
            if (data.error) {
              alert(data.error)
            } else {
              this.setState({ plants: data["plants"] })
              this.setState({ filteredPlants: data["plants"] })
            }
          })
      }

      setFilteredPlants = () => {
        const filteredPlants = this.state.plants
          .filter(plant => plant["common_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        this.setState({ filteredPlants: filteredPlants })
      }

      updateSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
      }
    
      componentDidMount () {
          this.setPlants()
      }
    
      render () {
        const { filteredPlants, searchTerm } = this.state
        return (
          <div >
            <Search searchTerm={searchTerm} updateSearchTerm={this.updateSearchTerm} setFilteredPlants={this.setFilteredPlants}/>
            <h3>Plants</h3>
            <Card.Group>
            { filteredPlants.length === 0 && <p>No plants listed yet!</p>}
            {
              filteredPlants !== 'undefined'
              ? 
                filteredPlants.map(plant =>
                <PlantCard key={plant.id} plant={plant} />
                )
          
              : null
            }
            </Card.Group>
          </div>
        )
      }
    }

    
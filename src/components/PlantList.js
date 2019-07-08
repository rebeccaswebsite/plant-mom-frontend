import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PlantCard from './PlantCard'
import Search from './Search'

export default class PlantList extends Component {
    state = {
      searchTerm: '',
      filteredPlants: []
      }

    componentDidMount = () => {
      this.setState({ filteredPlants: this.props.plants })
    }

      setFilteredPlants = () => {
        const filteredPlants = this.props.plants
          .filter(plant => plant["common_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        this.setState({ filteredPlants: filteredPlants })
        if (this.state.searchTerm == '') {
          this.setState({ filteredPlants: this.props.plants })
        }
      }

      updateSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
      }
    
      render () {
        const { filteredPlants, searchTerm } = this.state
        return (
          <div >
            <Search searchTerm={searchTerm} updateSearchTerm={this.updateSearchTerm} setFilteredPlants={this.setFilteredPlants}/>
            <h3>Plants</h3>
            <Card.Group itemsPerRow={8}>
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

    
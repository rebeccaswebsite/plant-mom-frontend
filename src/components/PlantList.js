import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PlantCard from './PlantCard'
import Search from './Search'

export default class PlantList extends Component {
    state = {
      filteredPlants: []
      }

    componentDidMount = () => {
      this.setState({ filteredPlants: this.props.plants })
    }

    setFilteredPlants = (searchTerm) => {
      const filteredPlants = this.props.plants
        .filter(plant => searchTerm.length > 0 ? plant["common_name"].toLowerCase().includes(searchTerm) : true)
      this.setState({ filteredPlants: filteredPlants })
    }
    
    search = (event) => {
      this.setFilteredPlants(event.target.value)
    }
  
    render () {
      const { filteredPlants, searchTerm } = this.state
      return (
        <div >
          <div className="plants-background">
            <h3 className="plants-text">Plants</h3>
          </div>
          <div style={{margin: '2rem 2rem 2rem 2rem' }}>
            <Search search={this.search} />
            <p>Click on any image for plant care instructions</p>
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
        </div>
      )
    }
    }

    
    // setFilteredPlants = plantCollection => {
    //   return plantCollection.filter( plant => {
    //     if (this.state.searchTerm) {
    //       plant["common_name"].toLowerCase().includes(this.state.searchTerm.toLowerCase())
    //     } else {
    //       return true
    //     }
    //   })
    // }
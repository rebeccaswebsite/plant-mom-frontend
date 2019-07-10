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
      if (this.state.searchTerm == "") {
        this.setState({ filteredPlants: this.props.plants  })
      }
    }

    updateSearchTerm = (event) => {
      this.setState({ searchTerm: event.target.value })
    }
    
    search = (event) => {
      this.updateSearchTerm(event)
      this.setFilteredPlants()
    }
  
    render () {
      const { filteredPlants, searchTerm } = this.state
      return (
        <div >
          <div className="plants-background">
            <h3 className="plants-text">Plants</h3>
          </div>
          <div style={{marginLeft: '20px'}}>
            <Search searchTerm={searchTerm} search={this.search} />
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

    
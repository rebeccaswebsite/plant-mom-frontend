import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import PlantDetails from './PlantDetails'

export default class PlantCard extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        const { plant } = this.props
        return(
            <Card onClick={this.handleClick} >
                <Image src={plant.img} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{plant.common_name}</Card.Header>
                </Card.Content>
                {this.state.clicked 
                ? <PlantDetails plant={plant}/>
                : null
                }
            </Card>
        )
    }
}

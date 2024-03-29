import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
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
            <Card>
                <img onClick={this.handleClick} alt="plant" src={plant.img} style={{height: 300, width: 'auto'}} />
                <Card.Content>
                <Card.Header>{plant.common_name}</Card.Header>
                </Card.Content>
                {this.state.clicked 
                ? <PlantDetails plant={plant}/>
                : null
                }
                <Card.Content as={ Link } to="/add-detail" extra>
                    <Icon name='add' />
                    Suggest an instruction on how to look after this plant
                </Card.Content>
            </Card>
        )
    }
}

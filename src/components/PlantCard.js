import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Icon } from 'semantic-ui-react'
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
                <Image onClick={this.handleClick} src={plant.img} wrapped ui={false} />
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

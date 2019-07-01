import React, { Component } from 'react'

export default class PlantCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.plant.common_name}</h1>
            </div>
        )
    }
}

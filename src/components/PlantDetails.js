import React, { Component } from 'react'

export default class PlantDetails extends Component {
    render() {
        const details = this.props.plant.details[0]
        return (
            <div>
                <p>Watering schedule: { details.watering_schedule }</p>
                <p>Sunlight exposure: { details.sunlight_exposure }</p>
                <p>Temperature: around { details.temperature } degrees celsius</p>
                <p>Humidity: around { details.humidity } percent</p>
            </div>
        )
    }
}
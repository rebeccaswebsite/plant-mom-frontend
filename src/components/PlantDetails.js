import React, { Component } from 'react'

export default class CardDetails extends Component {
    render() {
        const { plant } = this.props
        return (
            <div>
                <p>Plant { plant.common_name }</p>
            </div>
        )
    }
}
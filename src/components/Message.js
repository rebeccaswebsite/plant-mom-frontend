import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class Message extends Component {
    render() {
        return (
            <div style={{ marginTop: '1rem' }}>
                <Segment textAlign='left'>
                    <p>Thanks for adding this suggestion, an admin will review it soon.</p>
                </Segment>
            </div>
        )
    }
}

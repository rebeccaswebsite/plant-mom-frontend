import React, { Component } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { addRoom } from '../services/api'

export default class AddRoom extends Component {
    state = {
        roomName: ""
      }

  handleSubmit = () => {
    addRoom(this.props.user.user_id, this.state.roomName).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.setMyRoom();
        this.props.history.push(`/my-rooms/${data.id}`)
      }
    });
  };

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { roomName } = this.state

        return (
            <div className="add-room-background"> 
              <Grid textAlign='center' style={{ height: '100vh', marginTop: '0rem', backgroundColor: 'rgb(255,219,203)' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Segment textAlign='left'>
                      <h2>First, pick a name for your room</h2>
                      <Form>
                          <Form.Field>
                              <input onChange={this.handleChange} name="roomName" value={roomName} placeholder='Room Name' />
                          </Form.Field>
                          <Button onClick={this.handleSubmit} type='submit'>Next</Button>
                      </Form>
                      </Segment>
                </Grid.Column>
              </Grid>
            </div>
        )
    }
}

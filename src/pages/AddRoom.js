import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
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
        console.log(data)
        alert('Your room has been added!')
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
            <div>
                <h2>First, pick a name for your room</h2>
                <Form>
                    <Form.Field>
                        <label>Room Name</label>
                        <input onChange={this.handleChange} name="roomName" value={roomName} placeholder='Room Name' />
                    </Form.Field>
                    <Button onClick={this.handleSubmit} type='submit'>Next</Button>
                </Form>
            </div>
        )
    }
}


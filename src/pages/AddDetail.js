import React, { Component } from 'react'
import { Dropdown, Button, Form, Grid, Segment } from 'semantic-ui-react'
import { getPlants, sendSuggestion } from '../services/api';

export default class AddDetail extends Component {
    state = {
        plantId: "",
        suggestion: "",
        plantNames: [],
        sent: false
    };
    
    componentDidMount () {
        getPlants()
        .then(data => this.setPlantNames(data))
    }
    
    setPlantNames = data => {
        this.setState({ plantNames: this.transformPlantOptions(data["plants"]) })
    }

    transformPlantOptions = plants => {
        let transformedPlants = []
        for (var i = 0; i < plants.length; ++i) {
            let obj = {}
            obj["key"] = plants[i]["common_name"] 
            obj["text"] = plants[i]["common_name"] 
            obj["value"] = plants[i]["id"] 
            transformedPlants.push(obj)
        }
        return transformedPlants
    }

    handleSubmit = () => {
        sendSuggestion(this.state.plantId, this.state.suggestion).then(data => {
          if (data.error) {
            console.log(data.error)
          } else {
            this.setState(prevState => ({ active: !prevState.active }))
            this.setState({ sent: true });
            window.setTimeout(() => {
              this.props.history.push('/plants');
            }, 1000)
          }
        });
      };
    
    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    getPlantId = (e, data) => {
        this.setState({ plantId: data.value })
    }
    
      render() {
        const { suggestion, sent, active } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
          <div>
          <Grid textAlign='center' style={{ height: '100vh', marginTop: '0rem', background: 'rgb(235,213,212)' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
             <Segment textAlign='left'>
             <h4>Please let us know if any plant care information needs updating:</h4>
                <Dropdown
                    placeholder='Select Plant'
                    fluid
                    search
                    selection
                    options={this.state.plantNames}
                    onChange={this.getPlantId}
                />
                <Form>
                    <Form.Field>
                    <label>Suggestion</label>
                    <input name="suggestion" value={suggestion} onChange={handleChange}  />
                    </Form.Field>
                    <Button 
                    onClick={handleSubmit} 
                    type='submit'
                    active={active}
                    color={active ? 'teal' : null}
                    icon='add'
                    >
                    { !sent 
                    ? "Send"
                    : "Sent!"
                    }
                    </Button>
                </Form>
                </Segment>
              </Grid.Column>
            </Grid>
            </div>
        )
    }
}

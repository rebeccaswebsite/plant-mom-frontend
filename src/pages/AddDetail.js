import React, { Component } from 'react'
import { Dropdown, Button, Form } from 'semantic-ui-react'
import { getPlants, sendSuggestion } from '../services/api';

export default class AddDetail extends Component {
    state = {
        plantId: "",
        suggestion: "",
        plantNames: []
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
            alert(data.error);
          } else {
            alert('Thanks for adding this suggestion. An admin will review your suggestion soon. Happy planting!')
            this.props.history.push('/plants')
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
        const { suggestion } = this.state;
        const { handleChange, handleSubmit } = this;

        return (
          <div>
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
                <Button onClick={handleSubmit} type='submit'>Submit</Button>
            </Form>
            </div>
        )
    }
}

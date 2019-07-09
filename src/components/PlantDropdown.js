import React, { Component } from 'react'
import { Dropdown, Button, Form } from 'semantic-ui-react'

export default class PlantDropdown extends Component {
    state = {
        plantId: "",
        plantNames: []
    }
    
    componentDidMount () {
        this.setPlantNames(this.props.plants)
    }

    setPlantNames = data => {
        this.setState({ plantNames: this.transformPlantOptions(data) })
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
    
    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };
    
    getPlantId = (e, data) => {
        this.setState({ plantId: data.value })
    }
    
        render() {
        const { handleSubmit, room } = this.props;
        const { plantId, plantNames, suggestion } = this.state;
        const { getPlantId, handleChange } = this;
    
        return (
            <div>
            <h2>Add a plant to your room:</h2>
            <Dropdown 
                placeholder='Select Plant'
                fluid
                search
                selection
                options={plantNames}
                onChange={getPlantId}
            />
                {/* <Form>
                <Form.Field>
                <label>Suggestion</label>
                <input name="suggestion" value={suggestion} onChange={handleChange}  />
                </Form.Field> */
                /* </Form> */}
                <Button onClick={() => handleSubmit(room.id, plantId)}>Add</Button>
            </div>
        )
    }
}


// handleSubmit = () => {
//     sendSuggestion(this.state.plantId, this.state.suggestion).then(data => {
//         if (data.error) {
//         alert(data.error);
//         } else {
//         alert('Thanks for adding this suggestion. An admin will review your suggestion soon. Happy planting!')
//         this.props.history.push('/plants')
//         }
//     });
//     };
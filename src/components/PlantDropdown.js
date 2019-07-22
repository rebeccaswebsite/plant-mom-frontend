import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

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
        this.setState({ [event.target.name]: event.target.value });
    };
    
    getPlantId = (e, data) => {
        this.setState({ plantId: data.value })
    }
    
        render() {
        const { handleSubmit, room } = this.props;
        const { plantId, plantNames } = this.state;
        const { getPlantId } = this;
    
        return (
            <div>
            <h4>Add a plant to your room:</h4>
            <Dropdown 
                placeholder='Select Plant'
                fluid
                search
                selection
                options={plantNames}
                onChange={getPlantId}
            />
                <Button color='teal' style={{ marginTop: '1rem' }} onClick={() => handleSubmit(room.id, plantId)}>Add</Button>
            </div>
        )
    }
}

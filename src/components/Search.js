import React, { Component } from 'react'

export default class Search extends Component {
    handleChange = event => {
        event.preventDefault();
        this.props.setFilteredPlants()
    }

    render() {
        return (
            <div>
                <form onChange={this.handleChange}>
                    <input value={this.props.searchTerm} onChange={this.props.updateSearchTerm} placeholder='Search' />
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Search extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.setFilteredPlants()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.props.searchTerm} onChange={this.props.updateSearchTerm} placeholder='enter your search here' />
                </form>
            </div>
        )
    }
}

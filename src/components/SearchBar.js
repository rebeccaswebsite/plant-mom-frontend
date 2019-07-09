import React, { Component } from 'react'

export default class Search extends Component {
    handleChange = event => {
        event.preventDefault();
        this.props.setFilteredPlants()
    }

    render() {
        return (
            <div >
                <form className="ui category search" onChange={this.handleChange}>
                    <div className="ui icon input">
                    <input value={this.props.searchTerm} onChange={this.props.updateSearchTerm} placeholder='Search' />
                    <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

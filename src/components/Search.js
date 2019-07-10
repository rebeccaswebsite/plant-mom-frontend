import React, { Component } from 'react'

export default class Search extends Component {
    handleChange = event => {
        this.props.search(event)
    }

    render() {
        return (
            <div style={{ float : 'right'}} >
                <form onSubmit={e => e.preventDefault()} className="ui category search" >
                    <div className="ui icon input">
                    <input onChange={this.handleChange} placeholder='Search' />
                    <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        Username: 'Kailash'
    }
    handleSubmit = (e) => {
        e.preventDefault()

        alert('Data has been Submited' + this.state.Username)
    }
    handleChange = (e) => {

        this.setState({
            Username: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Name is : {this.state.Username}</h1>
                    <p>Enter name :</p>
                    <input type='text' value={this.state.Username} onChange={this.handleChange} />
                    <input type='Submit' />

                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'

class AddVeggiesForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      veggie: ''
    }
  }

  updateNewVeggie = (event) => {
    this.setState({ veggie: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addVegetable(this.state.veggie)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholer="New Vegetable" 
          onChange={this.updateNewVeggie} />
        <button type="submit">Add it</button>
      </form>
    )
  }
}

export default AddVeggiesForm

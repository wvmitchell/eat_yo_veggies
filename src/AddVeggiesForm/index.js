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
      <form>
        <input placeholer="New Vegetable" />
        <button>Add it</button>
      </form>
    )
  }
}

export default AddVeggiesForm

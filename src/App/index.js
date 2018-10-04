import React, { Component } from 'react';
import AddVeggiesForm from '../AddVeggiesForm'
import VeggiesContainer from '../VeggiesContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      veggies: []
    }
  }

  addVegetable = (veggie) => {
    this.setState({ veggies: [...this.state.veggies, veggie]})
  }

  render() {
    return (
      <div className="App">
        <AddVeggiesForm addVegetable={this.addVegetable} />
        <VeggiesContainer veggies={this.state.veggies} />
      </div>
    );
  }
}

export default App;

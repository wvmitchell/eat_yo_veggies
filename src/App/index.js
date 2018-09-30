import React, { Component } from 'react';
import AddVeggiesForm from '../AddVeggiesForm'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      vegetables: []
    }
  }

  render() {
    return (
      <div className="App">
        <AddVeggiesForm />
      </div>
    );
  }
}

export default App;

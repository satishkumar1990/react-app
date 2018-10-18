import React, { Component } from 'react';
import './App.css';
import Flexi from './Flexi'

class App extends Component {
  constructor(props) {
    super(props);
    this.onFlexiSubmit = this.handleFlexiSubmit.bind(this);
    this.onSelectState = this.handleSelectState.bind(this);
    this.onSelectName = this.handleSelectName.bind(this);
    this.state = {
      selectedState: "",
      name: "",
      items: [
        {
          "label": "Name",
          "name": "Person's Name",
          "type": "text",
          "component": "TextBox"
        },
        {
          "label": "State",
          "name": "State",
          "type": "select",
          "component": "DropDown",
          "states": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
          ]
        },
      ]
    };
  }

  handleFlexiSubmit() {
    let updatedPayload = {
      "label": "Selected Values",
      "name": "Selected Value",
      "type": "textarea",
      "component": "TextArea",
      "selectedValues": "Name : " + this.state.name + "\n State : " + this.state.selectedState,
    }
    this.state.items.push(updatedPayload);
    this.setState({ items: this.state.items })

  }
  handleSelectState(event) {
    this.setState({ selectedState: event.target.value })
  }
  handleSelectName(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <div className="App-title">Flexi Form</div>
        </header>
        <Flexi onSubmit={this.onFlexiSubmit} config={this.state.items} selectState={this.onSelectState} selectName={this.onSelectName} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Label, FormGroup, FormControl, Button } from 'react-bootstrap';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.addTodoItem = this.handleAddTodo.bind(this);
    this.editTodoItem = this.handleEditTodo.bind(this);
    this.deleteTodoItem = this.handleDeleteTodo.bind(this);
    this.state = {
      addTodo: '',
      editTodo: '',
      completeTodo: '',
      items:[]
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleAddTodo(event) {
    event.preventDefault();
    this.setState({addTodo: "",  items : [...this.state.items, this.state.addTodo]});
  }
  handleEditTodo(editTodo) {
    console.log("edit to do", editTodo)
    this.setState({items : this.state.items.filter((item => item === editTodo))})
  }
  handleDeleteTodo(deleteTodo) {
    console.log("Delete to do", deleteTodo)
    this.setState({items : this.state.items.filter((item => item !== deleteTodo))})
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TO DO APP</h1>
        </header>
        <p className="App-intro">
          <div className = "title">ADD ITEM</div>
          <div className="solidLine"/>
            <FormGroup>
              <form className="Form-wrapper">
                <input
                  className="formControl"
                  name="addTodo"
                  value= {this.state && this.state.addTodo }
                  onChange={e => this.change(e)}
                />
                <Button className="Button-text" onClick={this.addTodoItem}>Add</Button>
              </form>
            </FormGroup>
        </p>
        <p className="App-intro">
          <div className = "title">TODO</div>
          <div className="solidLine"/>
           <FormGroup>
              <form className="Form-wrapper">
                {this.state.items && this.state.items.map((item, index)=>
                <div key = {index} className = "View-todo">
                  <input
                    className="formControl"
                    name="viewTodo"
                    value= {item}
                  />
                  <Button className="Button-text" onClick={() => this.editTodoItem(item)}>Edit</Button>
                  <Button className="Button-text" onClick={() => this.deleteTodoItem(item)}>Delete</Button>
                </div>
                )}
              </form>
            </FormGroup>
        </p>
        <p className="App-intro">
          <div className = "title">COMPLETED</div>
          <div className="solidLine"/>
        </p>

      </div>
    );
  }
}

export default App;

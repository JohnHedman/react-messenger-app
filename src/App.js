import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'John', age: 23 },
      { name: 'Bry', age: 62 },
      { name: 'Ande', age: 22 }
    ],
    otherState: 'another value'
  };

  // Using ES6 function syntax allows us to use this.var when function is referenced.
  // This change of state is only allowed in class based components.
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');

    // Can't reference the state directly - Don't do this.
    // this.state.persons[0].name = 'Jonathan';

    // This will leave the this.otherState alone.  Only changes the values that are directly referenced.
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Bryan', age: 62 },
        { name: 'Andrea', age: 82 }
      ]
    })
  }

  render() {
    return (
      // Use 'className' to add css class instead of 'class' like normal html
      <div className="App">
        <h1>Hi, I am a React Application</h1>
        <p>This was made by Jonathan Hedman</p>
        <button onClick={this.switchNameHandler.bind(this, "Jonathan")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Jonathan!")}/>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );

    // Stacking React.createElements
    // Usually you would use jsx instead of nesting React.createElement (kind of cumbersome to nest)
    // jsx code would compile to exactly this anyway
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hi, I'm a React App!"));
  }
}

// If you import this file, you will import this class (App).
export default App;

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
    otherState: 'another value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // This will leave the this.otherState alone.  Only changes the values that are directly referenced.
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Bryan', age: 62 },
        { name: 'Andrea', age: 82 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'John', age: 23 },
        { name: event.target.value, age: 62 },
        { name: 'Andrea', age: 82 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // "Toggle" the showPersons (if true, change to false. If false, change to true)
    this.setState({
      showPersons: !doesShow
    });
  }

  // This render function is ran when React believes it needs to be rerendered (after state changes, etc.)
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // Figure out if the Person objects show be shown or not (based on if the button has been selected)
    let persons = null;

    /* Only render the Person objects when this.state.showPersons is true */
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            // For every person in the state.persons array should be rendered as a person object
            this.state.persons.map(person => {
              return <Person
                name={person.name}
                age={person.age}
              />
            })
          }
        </div>
      );
    }

    return (
      // Use 'className' to add css class instead of 'class' like normal html
      <div className="App">
        <h1>Hi, I am a React Application</h1>
        <p>This was made by Jonathan Hedman</p>
        {/* This might be tough on performance! */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* Display the persons variable that is defined above */}
          {persons}
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

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'John', age: 23 },
      { id: '2', name: 'Bry', age: 62 },
      { id: '3', name: 'Ande', age: 22 }
    ],
    otherState: 'another value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // Get the person in the array with the matching id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // Create a copy of the old array and replace the object that we changed above
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();   <- Old way of creating new object (instead of reference)

    // This is the new way of getting a new object that isn't a reference to the actual object
    const persons = [...this.state.persons]; // Three dots is spread operator
    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
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
      backgroundColor: 'green',
      color: 'white',
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
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2 ){
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      // Use 'className' to add css class instead of 'class' like normal html
      <div className="App">
        <h1>Hi, I am a React Application</h1>
        <p className={classes.join(' ')}>This was made by Jonathan Hedman</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* Display the persons variable that is defined above */}
          {persons}
      </div>
    );
  }
}

// If you import this file, you will import this class (App).
export default App;

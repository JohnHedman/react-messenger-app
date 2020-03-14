import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// This shows how you use a functional component
const app = props => {

  // You can have multiple state with hooks (and it is highly recommended)
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'John', age: 23 },
      { name: 'Bry', age: 62 },
      { name: 'Ande', age: 22 }
    ]
  });

  // Here is another state that is being tracked
  const [otherState, setOtherState] = useState('some other state');

  // The setPersonState will change assign state to exactly what you pass it (unlike with component state)
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Jonathan', age: 23 },
        { name: 'Bryan', age: 62 },
        { name: 'Andrea', age: 82 }
      ]
    });
  };

  return (
    // Use 'className' to add css class instead of 'class' like normal html
    <div className="App">
      <h1>Hi, I am a React Application</h1>
      <p>This was made by Jonathan Hedman</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;

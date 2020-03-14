import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Just render a single App component (multiple renders of components can exist inside of that object)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

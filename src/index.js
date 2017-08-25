import React from 'react';
import ReactDOM from 'react-dom';

// Crete new component. This component should produce some HTML
// ES6 function syntax () => {}
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

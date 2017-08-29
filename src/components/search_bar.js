import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const YT_API_KEY = 'AIzaSyByfAHCFp6XDfZ7iADBLU7qzI5jPVuRckY';

// functional component because it is literally is a function
//    const SearchBar = () => {
//      return <input />;
//    }

// class based component
// a class based component is needed when you need
// to add functionality to your component
// only class based component can handle state
class SearchBar extends Component {
  // cosntructor is reserved to initialize state and variables
  constructor(props) {

    super(props);

    this.state = { term: ''};
  }

  // render method/function
  // it returns a JSX
  render() {
    // return <input onChange={this.onInputChange}/>;
    // alternative syntax with more ES6
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value })}/>
      </div>
    );
  }

  /*
  onInputChange(event) {
    console.log(event.target.value);
  }
  */
}

export default SearchBar;

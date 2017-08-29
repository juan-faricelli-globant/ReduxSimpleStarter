import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const YT_API_KEY = 'AIzaSyByfAHCFp6XDfZ7iADBLU7qzI5jPVuRckY';

// Create new component. This component should produce some HTML
// ES6 function syntax () => {}
// one component per file
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: YT_API_KEY, term: 'beyonce'}, videos => {
      // this.setState({ videos: videos });
      // same as ...
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  };
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

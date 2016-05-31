require('./css/style.css');

import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar';
import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React!</p>
        <SearchBar />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

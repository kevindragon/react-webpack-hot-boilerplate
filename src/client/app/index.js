require('./scss/style.scss');

import React from 'react';
import {render} from 'react-dom';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import MessageList from './components/MessageList';

class App extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <MessageList />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

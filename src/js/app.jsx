require('../sass/style.scss');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const app = document.getElementById('app');

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      {/*<IndexRoute component={Home} />*/}
      {/*<Route path="book" component={Book} />*/}
    </Route>
  </Router>,
  app
);
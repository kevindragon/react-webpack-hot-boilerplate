import React from 'react';
import Figure from './message/Figure';
import Feed from './message/Feed';

export default class Message extends React.Component {
  render() {
    return (
      <div class="message">
        <Figure />
        <div class="main">
          <div class="name"></div>
          <div class="time"></div>
          <div class="body">
            <div class="title"></div>
            <div class="content"></div>
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

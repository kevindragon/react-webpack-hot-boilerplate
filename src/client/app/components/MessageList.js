import React from 'react';
import Message from './message/Message';

export default class MessageList extends React.Component {
  render() {
    return (
      <div class="message-list">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

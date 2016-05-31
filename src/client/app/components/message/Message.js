import React from 'react';
import Figure from './Figure';
import Feed from './Feed';
import Name from './Name';

export default class Message extends React.Component {
  render() {
    return (
      <div class="message">
        <Figure />
        <div class="main">
          <Name />
          <div class="time">12分钟前</div>
          <div class="body">
            <div class="title">标题</div>
            <div class="content">热爱生活的人，一定是热爱时尚的。时尚的行为付诸于生活中的一点一滴中，厨房里的美丽映像里。读一本书，学几样精致的餐品，</div>
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

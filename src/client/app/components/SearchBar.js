import React from 'react';
import SearchInput from './SearchInput';

export default class SearchBar extends React.Component {

  render() {
    return (
      <div class="search-bar">
        <SearchInput />
        <div class="write clearfix">write</div>
      </div>
    );
  }

}

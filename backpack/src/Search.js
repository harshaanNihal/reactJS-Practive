import React, { Component, Fragment } from 'react';
import Items from './Items';


class Search extends Component {

  state = {
    searchText: "",
  }

  handleKeyup = (e) => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { items, handleCheckClick, handleDelete } = this.props;
    var searchFilter = items.filter(v => v.text.includes(this.state.searchText));

    return (
      <Fragment>
        <input className="inputSearch" type="text" placeholder="Search" value={this.state.searchText} onChange={this.handleKeyup} />
        <Items name={this.props.name} items={searchFilter} handleCheckClick={handleCheckClick} handleDelete={handleDelete} />
      </Fragment>
    )
  }
}

export default Search;

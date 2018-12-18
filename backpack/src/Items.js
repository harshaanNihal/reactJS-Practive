import React, { Component } from 'react';

class Items extends Component {
  render() {
    const { name, items, handleDelete, handleCheckClick } = this.props;
    return (
      <ul>
        <h3>{name}({items.length})</h3>
        {items.map((element) => <li key={element.id}><input type="checkbox" data-id={element.id} onChange={() => handleCheckClick(element.id)} checked={element.done} /><span>{element.text}</span><button onClick={() => handleDelete(element.id)} data-id={element.id} >remove</button></li>)
        }
      </ul>
    )
  }
}

export default Items;
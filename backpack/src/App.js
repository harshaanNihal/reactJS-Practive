import React, { Component, Fragment } from 'react';
import MarkUnpacked from './MarkUnpacked';
import './App.css';
import Search from './Search';

var def = [
  { text: "the Laptop", done: false, id: 123456889 },
  { text: "the BOOK OF soul", done: false, id: 123496789 },
  { text: "food", done: true, id: 123456489 },
  { text: "charger of Laptop", done: false, id: 123452789 },
  { text: "cloths", done: false, id: 123451789 },
  { text: "Jacket", done: true, id: 123456679 },
  { text: "Blanket", done: false, id: 123456189 },
  { text: "Water", done: true, id: 123456729 },
  { text: "Calmness", done: false, id: 123456789 },
  { text: "Happiness", done: true, id: 123466789 }];

class App extends Component {

  state = {
    items: def,
    text: ''
  };

  handleInpChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleCheckClick = (id) => {
    let items = this.state.items.map(v => {
      if (v.id === id) { v.done = !v.done; }
      return v;
    })
    this.setState({ items })
  }

  handleDelete = (id) => {
    var index = this.state.items.reduce((acc, v, i) => {
      if (v.id === id) { acc = i; }
      return acc;
    }, -1)

    if (index !== -1) {
      let undo = this.state.items.splice(index, 1);
    }
    this.setState({ items: this.state.items })
  }

  handleSubmit = () => {
    if (!this.state.text) return;

    let listItem = {
      text: this.state.text,
      done: false,
      id: Date.now()
    }

    this.setState({
      items: this.state.items.concat(listItem),
      text: "",
    });
  }

  handleMarkUnpacked = () => {
    let items = this.state.items.map(v => { v.done = false; return v });
    this.setState({ items });
  }

  render() {
    let Packed = this.state.items.filter(v => v.done);
    let unPacked = this.state.items.filter(v => !v.done)
    return (
      <Fragment>
        <div className="input_div">
          <input placeholder="Add New Item" className="inputField" type="text" value={this.state.text} id="input-box" onChange={this.handleInpChange} />
          <button onClick={this.handleSubmit}>clickMe</button>
        </div>
        <Search name="unPacked" items={unPacked} handleCheckClick={this.handleCheckClick} handleDelete={this.handleDelete} />
        <Search name="Packed" items={Packed} handleCheckClick={this.handleCheckClick} handleDelete={this.handleDelete} />
        <MarkUnpacked handleMarkUnpacked={this.handleMarkUnpacked} />
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from './components';
import { ListCard } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <ListCard header="header" items={['item', 'item 2', 'item 3']}/>
          <Button href="#" theme='go'> Button </Button>
        </div>
      </div>
    );
  }
}

export default App;

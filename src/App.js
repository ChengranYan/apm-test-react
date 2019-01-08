import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.documentElement.addEventListener('click', () => {
      throw Error('hello react')
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello apm</h1>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
//  sentry - cli releases - o math - yc - p react files 1.0 upload - sourcemaps. / static / js /*.map  --url-prefix http://118.24.60.28:8080/static/js
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

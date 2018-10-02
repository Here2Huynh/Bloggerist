import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // basename is used for prod server
      // <BrowserRouter basename='/my-app' >
      <BrowserRouter >
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;

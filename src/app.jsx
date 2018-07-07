import React from 'react';
import Nav from './nav';
import './app.scss';

const App = () => (
  <div>
    <Nav />
    <div className="jumbotron">
      <h1 className="display-2 blueish">React Boilerplate</h1>
      <h2 className="display-4">Stage 2</h2>
      <hr className="my-4" />
      <div className="lead">
        <p>Set up with bootstrap 4</p>
      </div>
      <button className="btn btn-primary btn-lg" type="button">test</button>
    </div>
  </div>
);

export default App;

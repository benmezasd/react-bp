import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './buttons';
import Alerts from './alerts';

const Home = () => (
  <div>
    <div className="jumbotron">
      <h1 className="display-2" style={{ color: '#24aedb' }}>React Boilerplate</h1>
      <h2 className="display-4">Routing</h2>
      <hr className="my-4" />
      <div className="lead">
        <p>Set up with bootstrap 4</p>
      </div>
      <button className="btn btn-primary btn-lg" type="button">test</button>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <Buttons />
        </div>
        <div className="col">
          <Alerts />
        </div>
        <div className="col">
          <Link to="/buttons"><button type="button" className="btn btn-secondary btn-lg">Button</button></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

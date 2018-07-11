import React from 'react';
import Buttons from './buttons/buttons';
import Alerts from './alerts';
import Badges from './badges';

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
          <Badges />
        </div>
      </div>
    </div>
  </div>
);

export default Home;

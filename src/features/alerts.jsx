import React from 'react';
import { Link } from 'react-router-dom';
import ShowCode from './show-code';

const Alerts = () => (
  <div>
    <Link to="/alerts"><h3>Alerts</h3></Link>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="alert alert-primary">
            Primary
          </div>
          <ShowCode
            title="Primary Alert Code"
            language="react"
            code={`
  const Button = () => (
    <div className="alert alert-primary">
      Primary
    </div>
  );
            `}
          />
        </div>
        <div className="col">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Nice</h4>
            <p>this is decent</p>
            <hr />
            <p className="mb-0">under the line</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Alerts;

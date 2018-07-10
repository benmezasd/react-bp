import React from 'react';
import ShowCode from './show-code';
import { Link } from 'react-router-dom';

const Alerts = () => (
  <div>
    <Link to="/alerts"><h3>Alerts</h3></Link>
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
      </div>
    </div>
  </div>
);

export default Alerts;

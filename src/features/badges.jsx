import React from 'react';
import { Link } from 'react-router-dom';

const Badges = () => (
  <div>
    <Link to="/badges" className="badge badge-primary">Badges</Link>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col">
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-danger">Danger</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-light">Light</span>
          <span className="badge badge-dark">Dark</span>
        </div>
      </div>
    </div>
  </div>
);

export default Badges;

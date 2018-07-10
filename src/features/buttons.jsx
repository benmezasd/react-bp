import React from 'react';
import ShowCode from './show-code';
import { Link } from 'react-router-dom';

const Buttons = () => (
  <div>
    <Link to="/buttons"><h3>Buttons</h3></Link>
    <div className="container">
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-primary btn-lg">Primary Button</button>
          <ShowCode
            title="Primary Button Code"
            language="react"
            code={`
  const Button = () => (
    <div>
      <button type="button" className="btn btn-primary btn-lg">Primary Button</button>
    </div>
  );
                      `}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Buttons;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowCode from '../show-code';

const Btn = (props) => {
  const { text, classname } = props;
  const clsString = classname.join(' ');
  return (
    <button type="button" className={clsString}>{text}</button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  classname: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Cool',
      classname: ['btn', 'btn-large', 'btn-success'],
    };

    this.onButtonClassChange = this.onButtonClassChange.bind(this);
  }

  onButtonClassChange(e) {
    console.log(e.target.value);
  }

  render() {
    const { text, classname } = this.state;

    return (
      <div>
        <Link to="/buttons"><h3>Buttons</h3></Link>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="btnClass">Class Options
                  <select name="btnClass" id="btnClass" className="form-control" onChange={this.onButtonClassChange}>
                    <option value="1">large</option>
                    <option value="2">regular</option>
                    <option value="3">small</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Btn text={text} classname={classname} />
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
    )
  }
}

export default Buttons;

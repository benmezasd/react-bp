import React from 'react';
import HighLight from 'react-highlight';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
  }

  handleModalShowClick(e) {
    e.preventDefault();
    $(this.modal).modal('show');
  }

  handleModalCloseClick() {
    $(this.modal).modal('hide');
  }

  render() {
    const { title, language, code } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-primary btn-small" onClick={this.handleModalShowClick}>show code</button>
        <div className="modal fade" ref={modal => this.modal = modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <HighLight language={language}>
                  {code}
                </HighLight>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.handleModalCloseClick}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

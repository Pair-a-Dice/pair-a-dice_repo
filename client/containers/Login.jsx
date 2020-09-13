import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import our children components
// import LoginForm

// import actions
import * as actions from '../actions/actions.js';

// mapStateToProps
const mapStateToProps = state => ({
  // add pertinent state here, auto given store state

})

const mapDispatchToProps = dispatch => ({

})

class Login extends Component {
  constructor(props) {
    super(props);
  }

  // render Logo and LoginForm Component
  render() {
    return(
      <div className="login-container">
        <div className="login-logo">
        Pairadice V.2
        </div>
        <div className="login-form">
          <Link to="/waiting-room" className="waiting-room-link">Waiting Room</Link>
          {/* <LoginForm

          /> */}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
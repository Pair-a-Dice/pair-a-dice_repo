import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import our children components
import AccountInfo from '../components/AccountInfo.jsx'

// import actions
import * as actions from '../actions/actions.js';

// mapStateToProps
const mapStateToProps = state => ({
  // add pertinent state here, auto given store state

})

const mapDispatchToProps = dispatch => ({

})

class SessionRoom extends Component {
  constructor(props) {
    super(props);
  }

  // render Logo and LoginForm Component
  render() {


    return(
      <div className="session-room-container">
        <span className="session-room-navbar">
          <span className="logo">Pairadise</span>
          {/* <AccountInfo /> */}
        </span>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionRoom));
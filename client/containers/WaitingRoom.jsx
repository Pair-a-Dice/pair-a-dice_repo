import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import our children components
// import AccountInfo from '../components/AccountInfo.jsx'
// import LevelLanguageForm from '../components/LevelLanguageForm.jsx'

// import actions
import * as actions from '../actions/actions.js';

// mapStateToProps
const mapStateToProps = state => ({
  // add pertinent state here, auto given store state

})

const mapDispatchToProps = dispatch => ({

})

class WaitingRoom extends Component {
  constructor(props) {
    super(props);
  }

  // render Logo and LoginForm Component
  render() {


    return(
      <div className="waiting-room-container">
        <span className="waiting-room-navbar">
          <span className="logo">Pairadise</span>
          {/* <AccountInfo /> */}
        </span>
        <div className="greeting">
          Hello, Friend...<br />
          Please choose a level and language!<br />
        </div>
        <div className="level-language-form">
          {/* <LevelLanguageForm /> */}
          {/* Temp link to session-room  */}
          <Link to="/session-room" className="session-room-link">Link to Session Room</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WaitingRoom));
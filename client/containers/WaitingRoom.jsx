import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
//import store from '../store.js'
//import { render } from 'react-dom';

// import our children components
// import AccountInfo from '../components/AccountInfo.jsx'
// import LevelLanguageForm from '../components/LevelLanguageForm.jsx'

// import actions
import * as actions from '../actions/actions.js';

// mapStateToProps
const mapStateToProps = state => ({
  // add pertinent Lstate here, auto given store state
  // marketId: state.session.lastMarketId,
  // abc: state.userSessions.abc,
})

const mapDispatchToProps = dispatch => ({
  // addUser: (newUser) => dispatch(actions.addUser(newUser)),
  // updateLanguageLevelStatus: (languageLevelStatus) => dispatch(actions.updateLanguageLevelStatus(languageLevelStatus)),
  findPartner: (partner) => dispatch(actions.findPartner(partner)),
  // incrementSessionCount: () => dispatch(actions.incrementSessionCount()),

})

class WaitingRoom extends Component {
  constructor(props) {
    super(props);
  }

  // render Logo and LoginForm Component
  render() {
    //console.log("waitingroom props", props);

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
        <div className="vel-language-form">
          {/* <LevelLanguageForm /> */}
          {/* Temp link to session-room  */}
          <button
              id="waiting-room-button"
              type="button"
              onClick={() => this.props.findPartner()}
            >Button</button>
          <Link to="/session-room" className="session-room-link">Session Room</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WaitingRoom));
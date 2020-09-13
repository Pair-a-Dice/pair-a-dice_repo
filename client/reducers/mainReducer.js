import * as types from '../constants/actionTypes';

// userSessions:[{session: {1 session}, mainuser:{}, partner:{}},...] 
const initialState = {
  userSessions: [] // store response from database
  //userPair: [currentUser: {}, partnerUser: {}] // to use for session room
};

// const initialState = {
//   session: [{
//     session_id: null,
//     partnerA_id: null,
//     partnerB_id: null,
//     partnerA: true,
//     partnerB: false,
//   }],
//   mainUser: [{
//     username: "ronnie",
//     language: "Javascript",
//     level: "Hard",
//     status: true,
//     sessionCount: 777,
//   }],
//   partner: [{
//     username: "sam",
//     language: "Javascript",
//     level: "Hard",
//     status: true,
//   }],
// };

const mainReducer = (state=initialState, action) => {

switch(action.type) {
  // Add User

  // LevelLanguage

  // Increment Session

  // Find Partner
  case types.FIND_PARTNER:
    console.log("this is find_partner in mainReducer");
    // fetch request to get a partner list
    // response object = [{}...]
    //// choose a partner from the list

    // update the state with user, partner and session info

      // return updated state
      return {
        // ...state,
        // response.user
        // response.partner
      };

  // Pair Again

   default:
    return state;

}


}








export default mainReducer;
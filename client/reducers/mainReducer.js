import * as types from '../constants/actionTypes';

// userSessions:[{session: {1 session}, mainuser:{}, partner:{}},...] 
const initialState = {
  currentUser: {
    _id: 5,
    username: 'usertest',
    sessioncount: 10
  },
  currentPartner: {
    _id: 4,
    partnername: 'partnertest1',
    sessioncount: 2    
  } 
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

  // Find Partner
  case types.FIND_PARTNER:

    let partner;
    partner = {
      _id: 7,
      partnername: 'partnertest2',
      sessioncount: 7    
    } 
    // fetch request to get a partner list
    // fetch('/api/partner' + '/' + 'Javascript' + '&' + 'skill' 
    fetch('http://localhost:8080/api/partner/?language=Javascript&skill=Easy&_id=5')  //http://localhost:8080/api/partner
    .then(response => {
      return response.json();
    })
    .then(data => {
      // partner = data;
      console.log("data", data);
    })
    .catch(err => console.log(err));

    console.log("state before find partner", {...state})
    console.log("state after find partner", {...state, currentPartner: partner})

      // return updated state
      return {
        ...state,
        currentPartner: partner
      };

  // Increment Session
  
  // Pair Again

   default:
    return state;

}


}








export default mainReducer;
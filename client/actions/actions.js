// import actionType constants
import * as types from '../constants/actionTypes'


// add more action creators
export const addUser = (newUser) => ({
  type: types.ADD_USER,
  payload: newUser,
});

//payload here is an object with three props
export const updateLanguageLevelStatus = (languageLevelStatus) => ({
  type: types.UPDATE_LANGUAGELEVELSTATUS,
  payload: languageLevelStatus,
});

export const findPartner = (partner) => ({
  type: types.FIND_PARTNER,
  payload: partner,
});

export const incrementSessionCount = () => ({
    type: types.INCREMENT_SESSTIONCOUNT,
    // payload: null,
  });
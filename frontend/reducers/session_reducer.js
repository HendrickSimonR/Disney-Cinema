import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
  id: null
};

const sessionReducer = ( oldState = _nullUser, action ) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user

    case SIGNOUT_CURRENT_USER:
      return _nullUser;
      
    default:
      return oldState;
  }
};

export default sessionReducer;
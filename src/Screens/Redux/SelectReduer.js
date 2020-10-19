import {
  EMAIL_CHANGES,
  PASSWORD_CHANGES,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
} from '../action/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  user: null,
  error: '',
};
export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'select_libary':
      return action.payload;
    case EMAIL_CHANGES:
      return {...state, email: action.payload};
    case PASSWORD_CHANGES:
      return {...state, password: action.payload};
    case LOGIN_USER_REQUEST:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, loading: false};
    case LOGIN_USER_FAIL:
      return {...state, error: 'AUTHENTICATE FAILED.', loading: false};

    default:
      return state;
  }
};

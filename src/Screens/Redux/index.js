import FirebaseConfig from 'firebase';
import {
  EMAIL_CHANGES,
  PASSWORD_CHANGES,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
} from './types';
export const selectLibary = libraryId => {
  return {
    type: 'select_libary',
    payload: libraryId,
  };
};

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGES,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGES,
    payload: text,
  };
};

export const authenticateUser = ({email, password}) => {
  return dispatchEvent => {
    console.log('email', email);
    console.log('epasswordmail', password);
    dispatchEvent({type: LOGIN_USER_REQUEST});

    FirebaseConfig.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => onLoginSuccess(dispatchEvent, user))
      .catch(() => {
        console.log('catch signInWithEmailAndPassword');
        FirebaseConfig.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => onLoginSuccess(dispatchEvent, user))
          .catch(() => onLoginFailed(dispatchEvent));
      });
  };
};

const onLoginFailed = dispatchEvent => {
  dispatchEvent({type: LOGIN_USER_FAIL});
};
const onLoginSuccess = (dispatchEvent, user) => {
  dispatchEvent({type: LOGIN_USER_SUCCESS, payload: user});
};

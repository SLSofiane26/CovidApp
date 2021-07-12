import Axios from 'axios';
import * as ACT from './ActionsLogin';
import firebase from 'firebase';
import { ALPHA } from '../COVIDAction';

export let AUTH = (email, password, state) => async (dispatch) => {
  dispatch({
    type: ACT.AUTH,
    payload: {
      email: email,
      password: password,
      data: state,
    },
  });
  dispatch(AUTHSTART(email, password));
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_KEY}`;
  if (!state) {
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_KEY}`;
  }

  let dataBis = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  await Axios.post(url, dataBis)
    .then((res) => {
      let expDate = new Date(
        new Date().getTime() + res.data.expiresIn * 1000
      ).getTime();
      localStorage.setItem('idToken', res.data.idToken);
      localStorage.setItem('localId', res.data.localId);
      localStorage.setItem('expDate', expDate);
      localStorage.setItem('name', res.data.displayName);
      localStorage.setItem('photo', res.data.profilePicture);
      localStorage.setItem('email', res.data.email);
      dispatch(AUTHSUCCES(res.data.idToken, res.data.localID));
      dispatch(AUTHTIMEMOUT(res.data.expiresIn));
    })
    .catch((err) => {
      dispatch(AUTHFAILED(err));
    });
};

export let AUTHSTART = (email, password) => async (dispatch) => {
  dispatch({
    type: ACT.AUTHSTART,
    payload: {
      email: email,
      password: password,
    },
  });
};

export let AUTHFAILED = (error) => async (dispatch) => {
  dispatch({
    type: ACT.AUTHFAILED,
    payload: {
      error: error,
    },
  });
};

export let AUTHSUCCES = (token, id) => async (dispatch) => {
  dispatch({
    type: ACT.AUTHSUCCES,
    payload: {
      token: token,
      id: id,
    },
  });
};

var firebaseConfig = {
  apiKey: 'AIzaSyCIkaptA-fUVnsef604vYmW4tiYDLexxL0',
  authDomain: 'project-327bb.firebaseapp.com',
  databaseURL: 'https://project-327bb.firebaseio.com',
  projectId: 'project-327bb',
  storageBucket: 'project-327bb.appspot.com',
  messagingSenderId: '47077319301',
  appId: '1:47077319301:web:34b65cab5559b17cedffec',
  measurementId: 'G-6D19145XJP',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().languageCode = 'fr_FR';

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export let AUTHGOOGLE = async (dispatch) => {
  dispatch(GOOGLESTART);
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem('idToken', res.credential.idToken);
      localStorage.setItem('localId', res.credential.accessToken);
      localStorage.setItem('expDate', expDate);
      localStorage.setItem('photo', res.user.photoURL);
      localStorage.setItem('name', res.user.displayName);
      localStorage.setItem('email', res.user.email);
      dispatch(GOOGLESUCCES(res.credential.idToken, res.credential.providerId));
      dispatch(AUTHTIMEMOUT(3600));
    })
    .catch((err) => dispatch(GOOGLEFAILED(err)));
};

export let GOOGLESTART = async (dispatch) => {
  dispatch({
    type: 'GOOGLESTART',
  });
};
export let GOOGLESUCCES = (token, id) => async (dispatch) => {
  dispatch({
    type: 'GOOGLESUCCES',
    payload: {
      token: token,
      id: id,
    },
  });
};
export let GOOGLEFAILED = (error) => async (dispatch) => {
  dispatch({
    type: 'GOOGLEFAILED',
    payload: {
      error: error,
    },
  });
};

var providerBis = new firebase.auth.FacebookAuthProvider();

export let AUTHFACEBOOK = async (dispatch) => {
  dispatch({
    type: 'FACEBOOKSTART',
  });
  await firebase
    .auth()
    .signInWithPopup(providerBis)
    .then((res) => {
      console.log(res);
      let expDate = new Date(new Date().getTime() + 3600 * 1000).getTime();
      localStorage.setItem('idToken', res.credential.accessToken);
      localStorage.setItem('localId', res.credential.providerId);
      localStorage.setItem('photo', res.user.photoURL);
      localStorage.setItem('name', res.user.displayName);
      localStorage.setItem('email', res.user.email);
      localStorage.setItem('expDate', expDate);
      dispatch(AUTHTIMEMOUT(3600));
      dispatch(
        GOOGLESUCCES(res.credential.accessToken, res.credential.providerId)
      );
    })
    .catch((err) => {
      dispatch({ type: 'FACEBOOKFAILED' });
    });
};

export let CheikAuthState = () => async (dispatch, getState) => {
  let token = localStorage.getItem('idToken');
  let photo = localStorage.getItem('photo');
  let name = localStorage.getItem('name');
  let email = localStorage.getItem('email');
  dispatch(UpdateProfil(photo, name, email));
  if (!token) {
    dispatch(LOGOUT());
  } else {
    let expirationDate = localStorage.getItem('expDate');
    if (expirationDate <= new Date().getTime()) {
      dispatch(LOGOUT());
    } else {
      let userId = localStorage.getItem('localId');
      dispatch(AUTHSUCCES(token, userId));
      dispatch(AUTHTIMEMOUT((expirationDate - new Date().getTime()) / 1000));
    }
  }
};

export let UpdateUserProfil = (data) => async (dispatch) => {
  dispatch({
    type: 'STARTUPDATE',
  });
  let token = localStorage.getItem('idToken');
  let post = {
    idToken: token,
    displayName: data,
    photoUrl: null,
    deleteAttribute: null,
    returnSecureToken: true,
  };
  await Axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_KEY}`,
    post
  )
    .then((res) => {
      let name = localStorage.setItem('name', res.data.displayName);
      let photo = localStorage.setItem('photo', res.data.photoURL);
      let email = localStorage.setItem('email', res.data.email);
      dispatch(UpdateProfil(photo, name, email));
    })
    .catch((err) => {
      UpdateFailed(err);
    });
};

export let UpdateProfil = (photo, name, email) => async (dispatch) => {
  dispatch({
    type: 'UPDATESUCCES',
    payload: {
      name: name,
      email: email,
      photo: photo,
    },
  });
};

export let UpdateFailed = (err) => async (dispatch) => {
  dispatch({
    type: 'UPDATEFAILED',
    payload: {
      data: err,
    },
  });
};

export let PasswordReset = (email) => async (dispatch) => {
  dispatch({
    type: 'PASSWORDSTART',
  });
  let data = {
    requestType: 'PASSWORD_RESET',
    email: email,
  };
  Axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_KEY}`,
    data
  )
    .then((res) =>
      dispatch({
        type: 'PASSWORDSUCCES',
      })
    )
    .catch((err) =>
      dispatch({
        type: 'PASSWORDFAILED',
      })
    );
};

export let AUTHTIMEMOUT = (expirationDate) => async (dispatch) => {
  setTimeout(() => {
    dispatch(LOGOUT());
  }, expirationDate * 1000);
};

export let LOGOUT = () => async (dispatch) => {
  localStorage.removeItem('idToken');
  localStorage.removeItem('expDate');
  localStorage.removeItem('localId');
  localStorage.removeItem('photo');
  localStorage.removeItem('name');
  localStorage.removeItem('email');

  dispatch({
    type: ACT.LOGOUT,
  });
};

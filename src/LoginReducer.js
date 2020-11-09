import * as ACT from '../src/Containers/ActionsLogin';
import { ALPHA } from './COVIDAction';

let LoginState = {
  token: null,
  id: null,
  loading: false,
  error: null,
  verifier: false,
  name: null,
  email: null,
  photo: null,
  send: null,
  facebookerror: null,
};

let LoginReducer = (state = LoginState, action) => {
  switch (action.type) {
    case ACT.LOGOUT:
      return Object.assign({}, state, {
        token: null,
        id: null,
        loading: false,
        error: null,
        verifier: false,
        name: null,
        email: null,
        photo: null,
        send: null,
        facebookerror: null,
      });
    case 'STARTUPDATE':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'UPDATESUCCES':
      return Object.assign({}, state, {
        loading: true,
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      });
    case 'USERPROFIL':
      return Object.assign({}, state, {
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
        loading: false,
      });
    case 'UPDATEFAILED':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'FACEBOOKSTART':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'FACEBOOKFAILED':
      return Object.assign({}, state, {
        loading: false,
        facebookerror: true,
      });
    case 'USERPROFIL':
      return Object.assign({}, state, {
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,
      });
    case 'PASSWORDSTART':
      return Object.assign({}, state, {
        loading: true,
        send: false,
      });
    case 'PASSWORDSUCCES':
      return Object.assign({}, state, {
        loading: false,
        send: true,
      });
    case 'PASSWORDFAILED':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'GOOGLESTART':
      return Object.assign({}, state, { loading: true });
    case 'GOOGLESUCCES':
      return Object.assign({}, state, {
        token: action.payload.token,
        id: action.payload.id,
        loading: false,
      });
    case 'GOOGLEFAILED':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
      });
    case ACT.AUTHSTART:
      return Object.assign({}, state, { loading: true });
    case ACT.AUTHSUCCES:
      console.log(action.payload.token, action.payload.id);
      return Object.assign({}, state, {
        token: action.payload.token,
        id: action.payload.id,
        loading: false,
      });
    case ACT.AUTHFAILED:
      console.log(action.payload.data);
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    default:
      break;
  }
  return state;
};

export default LoginReducer;

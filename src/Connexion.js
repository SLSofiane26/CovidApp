import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styl from './Form.module.css';
import * as ACTION from './Containers/ActionLog';
import Spinner from './Spinner';

let regEmail = /^[a-zA-Z0-9+.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

let Connexion = memo(function Connexion(props) {
  let loading = useSelector((state) => state.login.loading);
  let facebook = useSelector((state) => state.login.facebookerror);

  let dispatch = useDispatch();
  let [Error, setError] = useState(false);
  let [Url, setUrl] = useState(false);
  let [Form, setForm] = useState({
    email: null,
    password: null,
    confirmmdp: null,
  });
  let [FormError] = useState({
    email: '',
    password: '',
    confirmmdp: '',
  });

  let isValid = (formErrors, rest) => {
    let valid = true;
    Object.values(formErrors).forEach(
      (value) => value.length > 0 && (valid = false)
    );
    Object.values(rest).forEach((value) => !value && (valid = false));
    return valid;
  };

  let handleValidate = (e, target) => {
    e.preventDefault();
    switch (target) {
      case 'inscription':
        setUrl(true);
        break;
      default:
        break;
    }
    let Error = FormError;
    let FormS = Form;
    if (isValid(Error, FormS) && Form.confirmmdp === Form.password) {
      console.log('hello');
      dispatch(ACTION.AUTH(Form.email, Form.password, Url));
    } else {
      setError(true);
    }
  };

  let handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let form = FormError;
    switch (name) {
      case 'email':
        form.email =
          regEmail.test(value) && value.length > 0
            ? ''
            : 'Adresse email incorrecte (veuillez inclure "@")';
        break;
      case 'password':
        form.password =
          value.length < 6 && value.length > 0
            ? 'Le mot de passe doit contenir entre 6 et 15 caracteres'
            : '';
        break;
      default:
        break;
    }
    setForm({
      ...Form,
      [name]: value,
    });
  };
  let inputStyle = [styl.InputStyle];
  let labelStyle = [styl.LabelStyle];
  let btnStyleBis = [styl.BtnBis];
  let btnStyle = [styl.Btn];
  let formStyle = [styl.formC];

  if (Error) {
    inputStyle.push(styl.error);
    labelStyle.push(styl.error);
    btnStyle.push(styl.error);
    btnStyleBis.push(styl.error);
    formStyle.push(styl.error);
  }

  let error = FormError;

  let handleGoogleSignin = () => {
    dispatch(ACTION.AUTHGOOGLE);
  };
  let handleFacebookSignin = () => {
    dispatch(ACTION.AUTHFACEBOOK);
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: '40',
            display: 'flex',
            justifyContent: 'center',
            marginTop: Error ? '7vh' : '10vh',
          }}
        >
          <div
            style={{
              width: '36vw',
              margin: '0',
              display: 'flex',
              justifyContent: 'center',
              position: 'fixed',
              background: '#020122',
              borderRadius: '10%',
            }}
          >
            <form
              className={formStyle.join(' ')}
              onSubmit={(e) => handleValidate(e)}
              noValidate='true'
            >
              <div style={{ flexBasis: '100%', textAlign: 'center' }}>
                <h1
                  style={{
                    background: '#020122',
                    border: '1px solid RGBA(245,0,89,1)',
                    fontSize: '1.5em',
                    padding: '30px',
                    margin: '0px',
                  }}
                >
                  Identifiez vous
                  <br />
                  <span style={{ fontSize: '1em' }}>
                    pour accéder à l'application
                  </span>
                </h1>
              </div>
              <div
                style={{
                  flexBasis: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  color: 'rgba(0, 230, 64, 1)',
                }}
              >
                <label htmlFor='email' className={labelStyle.join(' ')}>
                  Email
                </label>{' '}
                <input
                  className={inputStyle.join(' ')}
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  name='email'
                  onChange={(e) => handleChange(e)}
                  formNoValidate
                />
                {error.email.length > 0 && <span>{error.email} </span>}
              </div>
              <div
                style={{
                  flexBasis: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  color: 'rgba(0, 230, 64, 1)',
                }}
              >
                <label htmlFor='motdepasse' className={labelStyle.join(' ')}>
                  Mot de passe
                </label>
                <input
                  className={inputStyle.join(' ')}
                  type='text'
                  placeholder='Mot de passe'
                  autoComplete='motdepasse'
                  name='password'
                  onChange={(e) => handleChange(e)}
                  formNoValidate
                />
                {error.password.length > 0 && <span>{error.password} </span>}
              </div>
              <div
                style={{
                  color: 'RGBA(245,0,89,1)',
                  flexBasis: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                }}
              >
                <label htmlFor='Motdepasse' className={labelStyle.join(' ')}>
                  Confirmer mot de passe
                </label>
                <input
                  formNoValidate
                  className={inputStyle.join(' ')}
                  type='text'
                  name='confirmmdp'
                  placeholder='Confirmation'
                  autoComplete='motdepasseconfirm'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {Error && (
                  <span style={{ color: 'white' }}>
                    Utilisateur inconnue, veuillez respecter les champs
                    indiqués.
                  </span>
                )}
              </div>
              <div
                style={{
                  flexBasis: '100%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <button
                  className={btnStyle.join(' ')}
                  type='submit'
                  name='connexion'
                  placeholder='connexion'
                  autoComplete='connexion'
                  onClick={(e) => handleValidate(e)}
                >
                  Se connecter
                </button>
                <button
                  className={btnStyleBis.join(' ')}
                  type='submit'
                  name='inscription'
                  placeholder='inscription'
                  autoComplete='inscription'
                  onClick={() => setUrl(true)}
                >
                  S'inscrire
                </button>
              </div>

              <div style={{ flexBasis: '100%' }}>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src='https://img.icons8.com/plasticine/2x/google-logo.png'
                    width='100px'
                    height='100px'
                    alt='GoogleIcon'
                    onClick={() => handleGoogleSignin()}
                  />
                  <img
                    src='https://www.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png'
                    style={{ marginTop: '8px' }}
                    alt="logo"
                    width='80px'
                    height='80px'
                    onClick={() => handleFacebookSignin()}
                  />
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <p
                      style={{ color: 'white' }}
                      onClick={() => props.Change()}
                    >
                      Mot de passe oublié ?
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {facebook ? (
            <div
              style={{
                position: 'fixed',
                display: 'flex',
                fontSize: '0.5em',
                color: 'red',
              }}
            >
              <h1>Veuillez utiliser le même fournisseur de connexion</h1>
            </div>
          ) : null}
        </div>
      )}
    </Fragment>
  );
});

export default Connexion;

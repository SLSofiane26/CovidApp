import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styl from './Form.module.css';
import * as ACTION from '../src/Containers/ActionLog';
import Spinner from '../src/Containers/Layout/Spinner';

var regEmail = new RegExp(
  '^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$',
  'i'
);
let Inscription = memo(function Connexion(props) {
  let loading = useSelector((state) => state.login.loading);
  let errorB = useSelector((state) => state.login.error);
  let dispatch = useDispatch();
  let [Error, setError] = useState(false);
  let [Url] = useState(true);
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

  let handleValidate = (e) => {
    e.preventDefault();
    let Error = FormError;
    let FormS = Form;
    if (isValid(Error, FormS) && Form.confirmmdp === Form.password) {
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
  console.log(errorB);
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
            marginTop: Error ? '10vh' : '13vh',
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
            {errorB === true && (
              <div
                style={{
                  position: 'fixed',
                  display: 'flex',
                  width: '100vw',
                  justifyContent: 'center',
                  zIndex: '1000',
                  color: 'red',
                  marginTop: '10px',
                }}
              >
                <h1 style={{ margin: '0px', padding: '0px', fontSize: '1em' }}>
                  Email déjà utilisé
                </h1>
              </div>
            )}
            <form className={formStyle.join(' ')} noValidate='true'>
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
                  Inscrivez-vous
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
                  type='password'
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
                  type='password'
                  name='confirmmdp'
                  placeholder='Confirmation'
                  autoComplete='motdepasseconfirm'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {Error && (
                  <span style={{ color: 'white' }}>
                    Veuillez respecter les champs indiqués.
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
                  className={btnStyleBis.join(' ')}
                  type='button'
                  name='motdepasse'
                  placeholder='Mot de passe'
                  autoComplete='motdepasse'
                  onClick={(e) => handleValidate(e)}
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
                ></div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
});

export default Inscription;

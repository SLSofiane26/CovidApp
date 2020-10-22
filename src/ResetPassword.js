import React, { Fragment, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ACT from './Containers/ActionLog';

let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let ResetPassword = memo(function ResetPassword(props) {
  let dispatch = useDispatch();
  let loading = useSelector((state) => state.login.loading);
  let send = useSelector((state) => state.login.send);

  let [Reset, setReset] = useState({
    email: null,
  });

  let [Form] = useState({
    Error: {
      email: ' ',
    },
  });
  let [FormError, setFormError] = useState(false);

  let isValid = (form) => {
    let valid = true;
    Object.values(form).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'email':
        Form.Error.email =
          regEmail.test(value) && value.length > 0
            ? ''
            : 'Veuillez renseignez une adresse valide';
      default:
        break;
    }
    setReset({
      [name]: value,
    });
  };

  let handleForm = () => {
    if (isValid(Error)) {
      dispatch(ACT.PasswordReset(Reset.email));
    } else {
      setFormError(true);
    }
  };
  return (
    <Fragment>
      {loading ? (
        <h1>Envoi en cours</h1>
      ) : (
        <div
          style={{
            zIndex: '50',
            position: 'fixed',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '60vh',
            marginLeft: '30vw',
            transform: props.reset
              ? 'translate(10px,0vh)'
              : 'translate(10px,50vh)',
            transition: 'all 1s ease-in-out',
          }}
        >
          <form
            onSubmit={() => handleForm()}
            style={{
              width: '18vw',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              justifyContent: 'center',
            }}
            noValidate
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <label htmlFor='resetpassword' noValidate>
                Veuillez entrez votre adresse-email
              </label>
              <input
                style={{ width: '95%', marginTop: '1vh' }}
                type='text'
                name='email'
                autoComplete='resetpassword'
                onChange={(e) => handleChange(e)}
              />
              {Form.Error.email.length > 0 && (
                <span
                  style={{ fontSize: '0.8em', color: 'rgba(0, 230, 64, 1)' }}
                >
                  {Form.Error.email}{' '}
                </span>
              )}
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '5px',
              }}
            >
              <button
                formNoValidate
                type='submit'
                style={{
                  background: FormError
                    ? 'RGBA(245, 0, 89, 1)'
                    : ' transparent',
                  borderRadius: '5%',
                  transition: 'all 3s ease-in-out',
                  border: FormError
                    ? '1px SOLID RGBA(245, 0, 89, 1)'
                    : '1px SOLID rgba(0, 230, 64, 1)',
                  color: 'white',
                  height: '40px',
                  width: '120px',
                  marginTop: '8px',
                }}
              >
                Réinitialiser votre mot de passe
              </button>
            </div>
            {send ? (
              <div>
                <h1 style={{ color: 'rgba(0, 230, 64, 1)', fontSize: '1em' }}>
                  Email envoyé avec succés
                </h1>
              </div>
            ) : null}
          </form>
        </div>
      )}
    </Fragment>
  );
});

export default ResetPassword;

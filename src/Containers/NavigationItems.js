import React, { Fragment, memo, useEffect } from 'react';
import NavItems from './NavItems';
import * as LINK from './Link';
import { connect } from 'react-redux';

let NavigationItems = memo(function NavigationItems(props) {
  useEffect(() => {
    console.log(props.token);
  }, [props]);

  return (
    <Fragment>
      <ul
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          zIndex: '100',
          padding: '5px',
          boxSizing: 'border-box',
          textTransform: 'uppercase',
        }}
      >
        {props.token ? (
          <Fragment>
            <NavItems link={LINK.COVID} name='COVID-19' />
            <NavItems link='/covid-19-data' name='COVID-19-DATA' />
            <NavItems link='/covid-19-search' name='COVID-19-SEARCH' />
            <NavItems link={LINK.MonCompte} name='Mon compte' />
            <NavItems link={LINK.Logout} name='Se déconnecter' />
          </Fragment>
        ) : (
          <Fragment>
            <NavItems link={LINK.Home} name='Accueil' />
            <NavItems link={LINK.Login} name='Se connecter' />{' '}
            <NavItems link={LINK.Signup} name='Inscription' />
          </Fragment>
        )}
      </ul>
    </Fragment>
  );
});

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);

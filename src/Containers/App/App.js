import React, { Fragment, lazy, memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppContext from './AppContext';
import Layout from '../Layout/Layout';
import Spinner from '../Layout/Spinner';
import CovidBisBis from '../Covid/CovidBisBis';
import AnimationHomeBis from '../Home/AnimationHomeBis';

let Account = lazy(() => import('../Account/Account'));
let Home = lazy(() => import('../Home/Home'));
let Login = lazy(() => import('../Covid/Login'));
let Register = lazy(() => import('../Covid/Register'));
let CovidH = lazy(() => import('../Covid/CovidH'));
let SignOut = lazy(() => import('../Covid/SignOut'));
let CovidBis = lazy(() => import('../Covid/CovidBis'));

let App = memo(function App(props) {
  return (
    <Fragment>
      <Layout>
        <AppContext>
          <Switch>
            <Route
              path='/'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              )}
            />
            <Route
              path='/login'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Login />
                </Suspense>
              )}
            />
            <Route
              path='/signup'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Register />
                </Suspense>
              )}
            />
            <Route
              path='/logout'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <SignOut />
                </Suspense>
              )}
            />
            <Route
              path='/account'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <Account />
                </Suspense>
              )}
            />
            <Route
              path='/covid-19'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <CovidH />
                </Suspense>
              )}
            />
            <Route
              path='/covid-19-search'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <CovidBisBis />
                </Suspense>
              )}
            />
            <Route
              path='/covid-19-data'
              exact
              render={() => (
                <Suspense fallback={<Spinner />}>
                  <CovidBis />
                </Suspense>
              )}
            />
            <Route
              render={() => (
                <div
                  style={{
                    width: '100vw',
                    justifyContent: 'center',
                    display: 'flex',
                  }}
                >
                  <div
                    style={{
                      width: '100vw',
                      height: '100vh',
                      background: 'rgba(2, 1, 34, 1)',
                      position: 'fixed',
                    }}
                  ></div>
                  <h1
                    style={{
                      position: 'fixed',
                      fontSize: '30VW',
                      marginTop: '100px',
                      textAlign: 'center',
                      padding: '0px',
                      color: 'white',
                    }}
                  >
                    404{' '}
                  </h1>
                  <span
                    style={{
                      color: 'white',
                      display: 'flex',
                      position: 'fixed',
                      marginTop: '80vh',
                    }}
                  >
                    Aucune page{' '}
                  </span>
                  <AnimationHomeBis />
                </div>
              )}
            />
          </Switch>
        </AppContext>
      </Layout>
    </Fragment>
  );
});

export default App;

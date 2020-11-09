import React, { Fragment, lazy, memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppContext from '../AppContext';
import Layout from './Layout';
import Spinner from '../Containers/Layout/Spinner';
import AnimationHomeBis from './AnimationHomeBis';
import CovidBisBis from './CovidBisBis';

let Account = lazy(() => import('../Containers/Account'));
let Home = lazy(() => import('../Containers/Home'));
let Login = lazy(() => import('../Login'));
let Register = lazy(() => import('../Register'));
let CovidH = lazy(() => import('../Containers/CovidH'));
let SignOut = lazy(() => import('../Containers/SignOut'));
let CovidBis = lazy(() => import('../CovidBis'));

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

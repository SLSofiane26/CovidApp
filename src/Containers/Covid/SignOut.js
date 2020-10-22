import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as ACT from '../Reducer/ActionLog';

class SignOut extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.handleLogout();
  };
  componentDidUpdate = () => {};
  render() {
    return (
      <Fragment>
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: '40',
            background: 'black',
          }}
        >
          <Redirect from='/signout' to='/' />
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(ACT.LOGOUT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);

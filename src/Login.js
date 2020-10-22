import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import Connexion from './Connexion';
import LoginBackground from './Containers/LoginBackground';
import { ContextApp } from './Containers/AppContext';
import BackDrop from './BackDrop';
import ResetPassword from './ResetPassword';
import { Redirect } from 'react-router-dom';
import AnimationHomeBis from './Containers/AnimationHomeBis';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      reset: false,
    };
  }
  d = null;
  componentDidMount = () => {
    if (this.props.token) {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    }
  };
  auth = null;
  componentDidUpdate = (prevProps) => {
    if (prevProps.token !== this.props.token) {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
      this.auth = <Redirect from='/login' to='/account' />;
    }
  };

  render() {
    console.log(this.state.reset);
    return (
      <Fragment>
        {this.auth}
        <BackDrop show={this.state.show} />
        <Connexion
          Change={() =>
            this.setState((prevState) => ({
              reset: !prevState.reset,
            }))
          }
        />
        <AnimationHomeBis show={this.state.show} />
        <ResetPassword reset={this.state.reset} />
        <LoginBackground
          handleShow={() =>
            this.setState((prevState) => ({
              show: !prevState.show,
            }))
          }
        />
      </Fragment>
    );
  }
}

Login.contextType = ContextApp;

let mapStateToProps = (state) => {
  return {
    loading: state.login.loading,
    token: state.login.token,
  };
};
let mapDispathToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispathToProps)(Login);

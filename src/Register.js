import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import BackDropRegister from './BackDropRegister';
import AnimationHomeBis from './Containers/AnimationHomeBis';
import Inscription from './Inscription';
import RegisterBackground from './RegisterBackground';
class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  componentDidMount = () => {};
  componentDidUpdate = () => {};
  render() {
    return (
      <Fragment>
        <BackDropRegister show={this.state.show} />
        <Inscription />
        <RegisterBackground
          handleShow={() =>
            this.setState((prevState) => ({
              show: !prevState.show,
            }))
          }
        />

        <AnimationHomeBis show={this.state.show} />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);

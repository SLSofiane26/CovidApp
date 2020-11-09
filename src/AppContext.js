import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import * as ACT from './Containers/ActionLog';

export let ContextApp = React.createContext();
class AppContext extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleState = () => {
    this.setState((prevState) => ({
      loading: !prevState.loading,
    }));
  };
  componentDidMount = () => {
    this.props.cheikAuth();
  };

  componentDidUpdate = (prevState, prevProps) => {};

  render() {
    let loading = this.state.loading;

    return (
      <Fragment>
        <ContextApp.Provider value={(loading, this.handleState)}>
          {this.props.children}
        </ContextApp.Provider>
      </Fragment>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    cheikAuth: () => dispatch(ACT.CheikAuthState()),
  };
};
let mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContext);

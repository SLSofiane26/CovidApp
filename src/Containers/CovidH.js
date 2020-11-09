import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as ACT from './CovidActions';
import CovidMap from './Covid/CovidMap';

class CovidH extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.fetchData();
  };
  componentDidUpdate = () => {};
  render() {
    let d = null;
    if (!this.props.token) {
      d = <Redirect from='/covid-19' to='/login' />;
    }
    return (
      <Fragment>
        {d}
        <CovidMap />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.covid.dataBis,
    dataBis: state.covid.dataBisFilter,
    token: state.login.token,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(ACT.fetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidH);

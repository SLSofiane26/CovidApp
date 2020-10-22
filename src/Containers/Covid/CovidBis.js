import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as ACT from '../Reducer/CovidActions';
import CovidPost from './CovidPost';

class CovidBis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    this.props.fetchData();
  };

  componentDidUpdate = (prevState, prevProps) => {};

  render() {
    let d = null;
    if (!this.props.token) {
      d = <Redirect from='/covid-19-data' to='/login' />;
    }
    return (
      <Fragment>
        {d}
        <CovidPost data={this.props.dataBis} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CovidBis);

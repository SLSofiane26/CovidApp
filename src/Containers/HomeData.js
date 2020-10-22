import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import DataHome from './DataHome';
import * as AC from './HomeActions';

class HomeData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataHome: null,
      loading: false,
    };
  }

  componentDidMount = () => {
    this.props.fetchHome();
    setTimeout(() => {
      this.setState((prevState) => ({
        loading: true,
      }));
    }, 500);
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <Fragment>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <DataHome loading={this.state.loading} />
        )}
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataHome: state.covid.dataHome,
    loading: state.covid.loading,
  };
};

let mapDispatchToProps = (dipatch) => {
  return {
    fetchHome: () => dipatch(AC.fetchHomeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeData);

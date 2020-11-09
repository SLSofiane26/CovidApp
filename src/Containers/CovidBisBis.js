import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import AccountBack from '../Containers/AccountBack';
import * as ACT from './CovidActions';
import Styled from '../Style.module.css';
import Spinner from '../Containers/Layout/Spinner';

class CovidBisBis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pays: ' ',
      date: '',
      dataBis: [],
      disa: true,
      loading: false,
      load: false,
      visible: false,
    };
    this.handleselectChange = this.handleselectChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidMount = () => {
    this.props.fetchData();
  };

  componentDidUpdate = () => {
    if (this.props.dataBis) {
      this.setState((prevState) => ({
        dataBis: this.props.dataBis,
      }));
    }
  };

  handleselectChange = (e) => {
    let d = e.target.value;

    this.setState((prevState) => ({
      pays: d,
      disa: false,
    }));
  };

  handleDateChange = (e) => {
    let r = e.target.value;
    this.setState((prevState) => ({
      date: r,
    }));
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    setTimeout(() => {
      this.setState((prevState) => ({
        load: true,
      }));
    }, 1000);
    this.props.fetchDataHome(this.state.pays, this.state.date);
  };

  render() {
    console.log(this.state.visible);
    let d = null;
    if (this.state.dataBis) {
      d = this.state.dataBis.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: '30vh',
              position: 'fixed',
              display: 'flex',
              transition: 'all 10s ease-in-out',
              width: '100vw',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              textAlign: 'center',
            }}
          >
            {value.provinces.slice(0, 1).map((items, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color: 'white',
                    fontSize: '1em',
                    marginTop: '50px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      marginTop: '0px',
                    }}
                  >
                    <h4
                      style={{
                        padding: '0px',
                        fontSize: '4em',
                        textAlign: 'center',
                        color: 'RGBA(245, 0, 89, 1)',
                        marginTop: '0px',
                      }}
                    >
                      {items.province ? items.province : ' pas de donnée'}{' '}
                      <span style={{ fontSize: '0.5em' }}>
                        {this.state.date
                          ? new Date(this.state.date).toLocaleDateString()
                          : null}
                      </span>
                    </h4>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100vw',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-evenly',
                      }}
                    >
                      <div style={{ marginTop: '0px' }}>
                        <h4
                          style={{
                            marginTop: '10px',
                            padding: '0px',
                            fontSize: '1.5em',
                          }}
                        >
                          Nombre de mort(s) :<br></br>
                          <div style={{ marginTop: '10px' }}>
                            {items.deaths ? items.deaths : ' pas de données'}
                          </div>
                        </h4>
                      </div>

                      <div style={{ marginTop: '10px' }}>
                        <h4
                          style={{
                            marginTop: '0px',
                            padding: '0px',
                            fontSize: '1.5em',
                          }}
                        >
                          Nombre de cas confirmé(s) : <br></br>
                          <div style={{ marginTop: '10px' }}>
                            {items.confirmed
                              ? items.recovered
                              : ' pas de données'}
                          </div>{' '}
                        </h4>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <h4
                          style={{
                            marginTop: '0px',
                            padding: '0px',
                            fontSize: '1.5em',
                          }}
                        >
                          Nombre de guérison(s) :<br></br>
                          <div style={{ marginTop: '10px' }}>
                            {items.recovered
                              ? items.recovered
                              : ' pas de données'}
                          </div>
                        </h4>
                      </div>
                      <div style={{ marginTop: '10px' }}>
                        <h4
                          style={{
                            fontSize: '1.5em',
                            marginTop: '3px',
                            padding: '0px',
                          }}
                        >
                          Nombre de nouveaux cas :<br></br>
                          <div style={{ marginTop: '10px' }}>
                            {items.active ? items.active : ' pas de données'}
                          </div>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      });
    }
    return (
      <Fragment>
        {this.props.data ? (
          <form
            key='index'
            style={{
              position: 'fixed',
              width: '50vw',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              textAlign: 'center',
              marginTop: '10vh',
              marginLeft: '5vw',
              zIndex: '4000',
            }}
            onSubmit={(e) => this.handleSubmitForm(e)}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor='pays' style={{ color: 'white' }}>
                Pays
              </label>
              <select
                onChange={(e) => this.handleselectChange(e)}
                style={{ height: '25px' }}
              >
                <option value=' '></option>
                {this.props.data.map((values, index) => {
                  return (
                    <option key={index} value={values.code}>
                      {values.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '17px',
              }}
            >
              <label htmlFor='date' style={{ color: 'white' }}>
                Date
              </label>
              <input
                disabled={this.state.disa}
                style={{ height: '20px' }}
                type='date'
                placeholder='date'
                onChange={(e) => this.handleDateChange(e)}
              />
            </div>
            <div className={Styled.searchRechercher}>
              <label style={{ color: 'white' }}>RECHERCHER</label>
              <button style={{ width: '15vw', height: '25px' }} type='submit'>
                Rechercher
              </button>
            </div>
          </form>
        ) : null}
        {this.state.dataBis ? (
          <div
            style={{ width: '100vw', display: 'flex', flexDirection: 'row' }}
          >
            {d}
          </div>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
        <AccountBack />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.covid.dataBis,
    dataBis: state.covid.dataHomeBis,
    token: state.login.token,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(ACT.fetch()),
    fetchDataHome: (pays, date) => dispatch(ACT.fetchBis(pays, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CovidBisBis);

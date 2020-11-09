import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import HomeData from '../HomeData';
import * as ACT from '../ActionLog';
import video from '../../Assets/Coronavirus1.mp4';
import { Redirect } from 'react-router';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleProfilUser = this.handleProfilUser.bind(this);
  }

  handleChangeInput = (e) => {
    e.preventDefault();
  };

  handleProfilUser = (e) => {
    let d = e.target.value;
    this.props.handleUser(d);
  };

  handleProfilUser = (e) => {
    let d = e.target.value;
    this.props.handleUser(d);
  };
  render() {
    let d = null;
    if (!this.props.token) {
      d = <Redirect from='/account' to='/login' />;
    }

    return (
      <Fragment>
        <HomeData />
        <div
          style={{
            position: 'fixed',
            zIndex: '400',
            display: 'flex',
            marginTop: '100px',
          }}
        >
          {d}
          <form
            noValidate
            onSubmit={(e) => this.handleProfilUserBis(e)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '30px',
            }}
          >
            <label
              htmlFor='name'
              style={{ textTransform: 'uppercase', color: 'white' }}
            >
              Choisir un pseudo
            </label>
            <input
              formNoValidate
              type='text'
              placeholder='Pseudo'
              style={{ marginTop: '10px', width: '15vw' }}
              onChange={(e) => this.handleProfilUser(e)}
            />
          </form>
        </div>
        <video
          autoPlay
          loop
          muted
          width='100%'
          height='auto'
          style={{ position: 'fixed' }}
        >
          <source src={video} />
        </video>
      </Fragment>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dataBis: state.covid.dataBisFilter,
    token: state.login.token,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleUser: (name) => dispatch(ACT.UpdateUserProfil(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

import React, { Fragment, PureComponent } from 'react';
import AnimationHomeBis from './AnimationHomeBis';
import BackgroundHome from './BackgroundHome';
import styled from './AnimationHome.module.css';

class Home extends PureComponent {
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
        <div
          style={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            zIndex: '40',
          }}
        >
          <div
            style={{
              width: '40vw',
              height: '40vh',
              position: 'fixed',
              zIndex: '40',
              marginTop: '30vh',
              borderRadius: '5%',
              boxSizing: 'border-box',
              background: 'transparent',
            }}
          ></div>
        </div>
        <div
          style={{
            position: 'fixed',
            zIndex: '50',
            width: '100vw',
            textAlign: 'center',
            marginTop: '18vh',
          }}
        >
          <h1
            className={styled.titre}
            onClick={() =>
              this.setState((prevState) => ({
                show: !prevState.show,
              }))
            }
          >
            COVID<br></br>-19
          </h1>
        </div>
        <div
          style={{
            width: '100vw',
            height: '10px',
            position: 'fixed',
            zIndex: '50',
          }}
        ></div>
        <AnimationHomeBis show={this.state.show} />
        <BackgroundHome />
      </Fragment>
    );
  }
}

export default Home;

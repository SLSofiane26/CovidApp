import React, { Fragment, memo } from 'react';
import logo from '../Assets/logo.png';
import style from './AnimationHome.module.css';

let AnimationHome = memo(function AnimationHome(props) {
  let logod = [style.logo];
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <img
          alt='animationHome'
          src={logo}
          style={{ width: '50vw', height: '90vh' }}
          className={logod.join(' ')}
        />
      </div>
    </Fragment>
  );
});

export default AnimationHome;

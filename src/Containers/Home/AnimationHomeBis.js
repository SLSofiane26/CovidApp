import React, { Fragment, memo } from 'react';
import style from './AnimationHome.module.css';
import logo from '../../Assets/logo.png';
import loggb from '../../Assets/p.png';

let AnimationHomeBis = memo(function animationHomeBis(props) {
  let icon = [style.Icon];
  let iconbis = [style.iconBis];
  let iconn = [style.iconBiss];
  return (
    <Fragment>
      <div style={{ position: 'fixed', zIndex: '30' }}>
        <img
          src={logo}
          width='100vw'
          height='100vh'
          alt='fzfes'
          className={iconbis.join(' ')}
        />

        <img
          src={loggb}
          width='100vw'
          height='100vh'
          alt='fzfes'
          className={iconbis.join(' ')}
        />
        <img
          src='https://conseilsphytoaroma.files.wordpress.com/2017/10/microbe.png?w=407'
          width='100vw'
          height='100vh'
          alt='fzfes'
          className={iconn.join(' ')}
        />
        <img
          src='https://ctsjw.com.au/cms/wordpress/wp-content/uploads/2020/03/computer-troubleshooters-coronavirus.png'
          width='100vw'
          height='100vh'
          alt='fzfes'
          className={icon.join(' ')}
        />
      </div>
      <div
        style={{
          background: 'rgba(2,1,34,0.6)',
          width: '100vw',
          position: 'fixed',
          zIndex: '30',
          height: '100vh',
          display: props.show ? 'flex' : 'none',
        }}
      ></div>
    </Fragment>
  );
});

export default AnimationHomeBis;

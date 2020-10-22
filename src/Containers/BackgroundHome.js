import React, { Fragment, memo } from 'react';
import image from '../Assets/snazzy-image.png';

let BackgroundHome = memo(function BackgroundHome(props) {
  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: '0',
        }}
      >
        <img
          alt='backgroundHome'
          src={image}
          style={{
            width: '100%',
            height: 'auto',
            zIndex: '0',
          }}
        />
      </div>
    </Fragment>
  );
});

export default BackgroundHome;

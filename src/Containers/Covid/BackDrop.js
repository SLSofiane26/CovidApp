import React, { memo } from 'react';

let BackDrop = memo(function BackDrop(props) {
  return props.show ? (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: '40',
        position: 'fixed',
        display: 'flex',
        backgroundColor: 'RGBA(2,1,34,0.6)',
      }}
    ></div>
  ) : null;
});

export default BackDrop;

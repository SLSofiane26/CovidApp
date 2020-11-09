import React, { memo } from 'react';
import './Spinner.css';

let Spinner = memo(function Spinner(props) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '30',
        background: 'rgba(2,1,34,1)',
      }}
    >
      <div className='loader'>Chargement....</div>
    </div>
  );
});

export default Spinner;

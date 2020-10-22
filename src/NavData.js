import React, { Fragment, memo } from 'react';

let NavData = memo(function NavData(props) {
  return (
    <Fragment>
      <div
        style={{
          width: '100vw',
          height: '10px',
          position: 'fixed',
          zIndex: '300',
          display: 'flex',
        }}
      >
        <h3>Pays :</h3>
        <h3>Nombre de cas :</h3>
        <h3>Nombre de décés :</h3>
        <h3>Nombre de cas grave :</h3>
        <h3>Nombre de guérisson :</h3>
      </div>
    </Fragment>
  );
});

export default NavData;

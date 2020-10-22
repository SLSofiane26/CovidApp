import React, { memo } from 'react';

let Hoc = memo(function Hoc(props) {
  return (
    <div
      style={{
        maxWidth: '100vw',
        width: '100vw',
        maxHeight: '100vh',
        height: '100vh',
      }}
    >
      {props.children}
    </div>
  );
});

export default Hoc;

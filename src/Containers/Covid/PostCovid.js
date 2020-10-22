import React, { Fragment, memo } from 'react';

let PostCovid = memo(function PostCovid(props) {
  return (
    <Fragment>
      <div
        style={{
          color: 'red',
          border: '4px solid red',
          padding: '40px',
          color: 'white',
        }}
      >
        <h1>Pays : {props.name}</h1>
        <p>Nombre de décés : {props.deaths}</p>
        <p>Nombre de cas confirmés : {props.confirmer}</p>
        <p>Nombre de cas grave : {props.critical}</p>
        <p>Nombre guérison : {props.gueris}</p>
      </div>
    </Fragment>
  );
});

export default PostCovid;

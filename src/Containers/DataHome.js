import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';

let DataHome = memo(function DataHome(props) {
  let state = useSelector((state) => state.covid.dataHome);
  console.log(state);
  let d = null;
  if (state) {
    d = (
      <div
        style={{
          opacity: props.loading ? '1' : '0.4',
          transition: 'all 1s ease-in-out',
          marginLeft: '60vw',
          position: 'fixed',
          marginTop: '10Vh',
          zIndex: '500',
          width: '50vw',
          transform: props.loading
            ? 'translate(100px,0px)'
            : 'translate(600px,0px)',
        }}
      >
        {state.map((value, index) => {
          let date = new Date(value.lastUpdate);
          let e = date.toLocaleDateString();
          return (
            <div
              key={index}
              style={{
                position: 'fixed',
                color: 'white',
                transition: 'all 2s ease-in-out',
                border: '2px solid RGBA(245, 0, 89, 1)',
                padding: '20px',
                height: '50vh',
                paddingRight: '90px',
                paddingLeft: '90px',
                borderRadius: '2%',
                paddingBottom: '90px',
              }}
            >
              <h1 style={{ textAlign: 'left' }}> Actualités</h1>
              <p style={{ fontSize: '1em' }}>
                Mise à jour le<br></br> {e}
              </p>
              <p style={{ fontSize: '1.2em', marginTop: '30px' }}>
                Cas confirmés : <br></br>
                {value.confirmed}
              </p>
              <p style={{ fontSize: '1.2em' }}>
                Nombre de décés :<br></br> {value.deaths}
              </p>
              <p style={{ fontSize: '1.2em' }}>
                Guérisons :<br></br> {value.recovered}
              </p>
              <p style={{ fontSize: '1.2em' }}>
                Cas critiques :<br></br> {value.critical}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
  return <Fragment>{d}</Fragment>;
});

export default DataHome;

import React, { memo, useState } from 'react';
import Styled from '../src/Style.module.css';

let PostsBis = memo(function PostsBis(props) {
  let [loading, setloading] = useState(false);
  let [state, setstate] = useState(false);
  let handleClick = (value) => {
    setstate(value);
    setTimeout(() => {
      setloading(!loading);
    }, 300);
  };
  return (
    <div className={Styled.postBisContainer}>
      {props.data.map((value, index) => {
        let date = new Date(value.lastUpdate);
        let d = date.toLocaleDateString();
        let dateB = new Date(value.lastChange);
        let e = dateB.toLocaleDateString();
        return (
          <div
            key={index}
            onClick={() => handleClick(value)}
            className={Styled.postBisBisContainer}
            onDoubleClick={() => setstate(null)}
          >
            <div style={{ marginLeft: '0px' }}>
              <p>
                Pays :<br></br> {value.country}
              </p>
            </div>
            <div style={{ marginLeft: '0px' }}>
              <p>
                Last Update :<br></br>
                {value.lastUpdate ? e : 'Aucunes données'}
              </p>
            </div>
            <div style={{ margin: '0px' }}>
              <p>
                Last Change : <br></br>
                {value.lastChange ? d : 'Aucunes données'}
              </p>
            </div>
          </div>
        );
      })}
      {state && (
        <div
          className={Styled.ContainerPost}
          style={{
            position: loading ? 'absolute' : 'none',
            transform: loading
              ? 'translate(0px,0px)'
              : 'translate(0px,-900px) ',
            opacity: loading ? '1' : '0',
          }}
          onDoubleClick={() => setstate(false)}
          onClick={() => setloading(false)}
        >
          <div
            style={{
              display: state ? 'flex' : 'null',
              zIndex: '50',
              position: 'absolute',
              color: 'white',
              marginTop: '50px',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                color: loading ? 'white' : 'black',
                transition: 'all 1s ease-in-out',
              }}
            >
              <h1 style={{ fontSize: '20px', marginTop: '40px' }}>
                Pays : {state.country}
              </h1>
              <img
                alt='logoone'
                style={{ marginTop: '40PX' }}
                src='https://www.icone-png.com/png/32/31644.png'
                width='50px'
                height='50px'
              />
              <p>Nombre de décé(s) : {state.deaths}</p>
              <img
                alt='logotwo'
                src='https://www.montelimar.fr/application/files/6316/0440/9236/masque.png'
                width='50px'
                height='50px'
              />
              <p>Nombre de cas confirmé(s) : {state.confirmed}</p>
              <img
                alt='logothree'
                src='https://www.icone-png.com/png/51/51434.png'
                width='50px'
                height='50px'
              />
              <p>Nombre de cas guéri(s) : {state.recovered}</p>
              <img
                alt='logofour'
                src='https://www.calpnetwork.org/wp-content/uploads/2020/07/Summary-9-icon-5-250x300.png'
                width='50px'
                height='50px'
              />
              <p>Nombre de cas critique(s) : {state.critical}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default PostsBis;

import React, { Fragment, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

let CardNav = memo(function CardNav(props) {
  let photo = useSelector((state) => state.login.photo);
  let name = useSelector((state) => state.login.name);
  console.log(photo, name);

  let [state, setstate] = useState({
    photo: '',
    name: '',
  });

  return state ? (
    <div
      style={{
        width: '100%',
        justifyContent: 'flex-end',
        display: 'flex',
        position: 'fixed',
        marginRight: '30px',
        zIndex: '50',
      }}
    >
      <h4 style={{ color: 'white', marginRight: '30px' }}>{name}</h4>
      <img
        src={
          photo
            ? photo
            : 'https://iconsgalore.com/wp-content/uploads/2018/10/male-avatar-1-featured-2.png'
        }
        width='50px'
        height='50px'
        style={{ marginTop: '7px' }}
      />
    </div>
  ) : null;
});

export default CardNav;

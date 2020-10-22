import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Home/AnimationHome.module.css';

let NavItems = memo(function NavItems(props) {
  return (
    <Fragment>
      <li style={{ listStyle: 'none', marginRight: '30px' }}>
        <NavLink to={props.link} className={style.link}>
          {props.name}
        </NavLink>
      </li>
    </Fragment>
  );
});

export default NavItems;

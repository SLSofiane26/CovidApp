import React, { Fragment, memo } from 'react';
import { useSelector } from 'react-redux';
import Hoc from './Hoc';
import NavigationItems from './NavigationItems';

let Layout = memo(function Layout(props) {
  let token = useSelector((state) => state.login.token);
  let photo = useSelector((state) => state.login.photo);
  let name = useSelector((state) => state.login.name);
  console.log(photo);
  return (
    <Fragment>
      <Hoc>
        <header>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              zIndex: '50',
              position: 'fixed',
              width: '100vw',
            }}
          >
            <NavigationItems />
            {token !== null ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '1.5vh',
                  marginLeft: '800px',
                }}
              >
                <img
                  style={{
                    position: 'fixed',
                  }}
                  alt='imageLayout'
                  src={
                    'https://iconsgalore.com/wp-content/uploads/2018/10/male-avatar-1-featured-2.png'
                  }
                  width='40px'
                  height='40px'
                />
                <h3
                  style={{
                    color: 'white',
                    padding: '0px',
                    margin: '0px',
                    marginTop: '6px',
                    position: 'fixed',
                    marginLeft: '50px',
                  }}
                >
                  {name ? name : null}
                </h3>
              </div>
            ) : null}
          </nav>
        </header>
        <main>{props.children}</main>
      </Hoc>
    </Fragment>
  );
});

export default Layout;

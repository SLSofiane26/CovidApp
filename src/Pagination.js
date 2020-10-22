import React from 'react';

let Pagination = ({ postPerpage, total, paginate }) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(total / postPerpage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav
      style={{
        display: 'flex',
        position: 'fixed',
        zIndex: '100',
        marginTop: '96.5vh',
        justifyContent: 'center',
        width: '100vw',
        padding: '0px',
      }}
    >
      <ul
        style={{
          display: 'flex',
          color: 'black',
          zIndex: '100',
          fontSize: '10px',
        }}
      >
        {pageNumber.map((number) => (
          <li
            key={number}
            style={{
              listStyle: 'none',
              textDecoration: 'none',
              padding: '0px',
              margin: '0px',
              paddingRight: '50px',
            }}
          >
            <a onClick={() => paginate(number)} style={{ color: 'white' }}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;

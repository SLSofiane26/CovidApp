import React, { Fragment, memo } from 'react';
import { useDispatch } from 'react-redux';
import * as ACTIONS from '../src/COVIDAction';

let CovidSearch = memo(function CovidSearch(props) {
  let dispatch = useDispatch();
  let d = ' ';
  let handleChange = (e) => {
    d = e.target.value;
    dispatch(ACTIONS.ALPHA(d));
  };
  let handleChangeBisBis = (e) => {
    d = e.target.value;
    dispatch(ACTIONS.ALPHABISBIS(d));
  };
  let handleChangeBis = (e) => {
    d = e.target.value;
    dispatch(ACTIONS.ALPHABIS(d));
  };
  let handleChangeBisBisBis = (e) => {
    d = e.target.value;
    dispatch(ACTIONS.ALPHABISBISBIS(d));
  };
  let handleChangeBisBisBisBis = (e) => {
    d = e.target.value;
    dispatch(ACTIONS.ALPHABISBISBISBIS(d));
  };

  let handleChangeInput = (e) => {
    let d = e.target.value;
    dispatch(ACTIONS.FILTER(d));
  };
  return (
    <Fragment>
      <div
        style={{
          position: 'fixed',
          zIndex: '200',
          display: 'flex',
          marginTop: '65px',
          width: '100vw',
          justifyContent: 'space-evenly',
          flexWrap: 'nowrap',
        }}
      >
        <form style={{ flexBasis: '10%' }}>
          <input
            type='search'
            placeholder='Rechercher'
            style={{
              textAlign: 'center',
              border: 'none',
              width: '20vw',
            }}
            onChange={(e) => handleChangeInput(e)}
          />
        </form>
        <form>
          <select name='select' onChange={(e) => handleChange(e)}>
            <option value=''></option>
            <option value='alphabetique'>Alphabétique</option>
            <option value='inverse'>Inversé</option>
          </select>
        </form>
        <form>
          <select name='select' onChange={(e) => handleChangeBis(e)}>
            <option value=''></option>
            <option value='deces'>Nombre de décé(s) décroissant</option>
            <option value='dece'>Nombre de décé(s) croissant</option>
          </select>
        </form>
        <form>
          <select name='select' onChange={(e) => handleChangeBisBis(e)}>
            <option value=''></option>
            <option value='confirmer'>
              Nombre de cas confirmé(s) décroissant
            </option>
            <option value='confirme'>
              Nombre de cas confirmé(s) croissant
            </option>
          </select>
        </form>
        <form>
          <select name='select' onChange={(e) => handleChangeBisBisBis(e)}>
            <option value=''></option>
            <option value='guerison'>Nombre de guérison(s) décroissant</option>
            <option value='gueriso'>Nombre de cas guérison(s) croissant</option>
          </select>
        </form>
        <form>
          <select name='select' onChange={(e) => handleChangeBisBisBisBis(e)}>
            <option value=''></option>
            <option value='critique'>
              Nombre de cas critique(s) décroissant
            </option>
            <option value='critiqu'>Nombre de cas critique(s) croissant</option>
          </select>
        </form>
      </div>
    </Fragment>
  );
});

export default CovidSearch;

import Axios from 'axios';

export let fetchHomeData = () => async (dispatch) => {
  dispatch(fetchHomeStart);
  await Axios({
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/totals',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
      useQueryString: true,
    },
    params: {
      format: 'json',
    },
  })
    .then((response) => {
      dispatch(fetchSucces(response.data));
    })
    .catch((error) => {
      dispatch(fetchError(error));
    });
};

export let fetchHomeStart = () => async (dispatch) => {
  dispatch({
    type: 'STARTHOME',
  });
};

export let fetchSucces = (data) => async (dispatch) => {
  dispatch({
    type: 'SUCCESHOME',
    payload: {
      data: data,
    },
  });
};
export let fetchError = (err) => async (dispatch) => {
  alert('hello');
  console.error(err);
  dispatch({
    type: 'ERRORHOME',
  });
};

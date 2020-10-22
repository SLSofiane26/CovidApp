import Axios from 'axios';

export let fetchBis = (pays, date) => async (dispatch) => {
  dispatch({
    type: 'STARTBIS',
  });
  if (!pays) {
    dispatch(FetchFailed);
  }
  await Axios({
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/report/country/code',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': '65c2ce8172mshb76e3c55662a068p126191jsn4640a5c9ca70',
      useQueryString: true,
    },
    params: {
      format: 'json',
      'date-format': 'YYYY-MM-DD',
      date: date,
      code: pays,
    },
  })
    .then((response) => {
      dispatch({
        type: 'SUCCESBIS',
        payload: {
          data: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: 'FAILEDBIS',
        payload: {
          data: error,
        },
      });
      console.log(error);
    });
};

export let fetch = () => async (dispatch) => {
  dispatch(FetchStart);
  await Axios({
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/country/all',
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
      dispatch(FetchSucces(response.data));
    })
    .catch((error) => {
      dispatch(FetchFailed(error));
    });
};

export let FetchSucces = (data) => async (dispatch) => {
  dispatch({
    type: 'SUCCES',
    payload: {
      data: data,
    },
  });
};
export let FetchFailed = (err) => async (dispatch) => {
  dispatch({
    type: 'FAILED',
    payload: {
      data: err,
    },
  });
};
export let FetchStart = () => async (dispatch) => {
  dispatch({
    type: 'START',
  });
};

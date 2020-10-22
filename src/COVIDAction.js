export let ALPHA = (filter) => async (dispatch, getState) => {
  let state = getState().covid.dataBisFilter.slice();
  if (!filter) {
    state = state.sort((a, b) => (a.country > b.country ? 1 : -1));
  } else
    state.sort((a, b) =>
      filter === 'alphabetique'
        ? a.country > b.country
          ? 1
          : -1
        : a.country > b.country
        ? -1
        : 1
    );
  dispatch({
    type: 'ALPHA',
    payload: {
      data: state,
    },
  });
};

export let ALPHABIS = (filter) => async (dispatch, getState) => {
  let state = getState().covid.dataBisFilter.slice();
  if (!filter) {
    state = state.sort((a, b) => (a.country > b.country ? 1 : -1));
  } else
    state.sort((a, b) =>
      filter === 'deces'
        ? a.deaths > b.deaths
          ? -1
          : 1
        : a.deaths < b.deaths
        ? -1
        : 1
    );
  dispatch({
    type: 'ALPHABIS',
    payload: {
      data: state,
    },
  });
};
export let ALPHABISBIS = (filter) => async (dispatch, getState) => {
  let state = getState().covid.dataBisFilter.slice();
  if (!filter) {
    state = state.sort((a, b) => (a.country > b.country ? 1 : -1));
  } else
    state.sort((a, b) =>
      filter === 'confirmer'
        ? a.confirmed > b.confirmed
          ? -1
          : 1
        : a.confirmed < b.confirmed
        ? -1
        : 1
    );
  dispatch({
    type: 'ALPHABISBIS',
    payload: {
      data: state,
    },
  });
};

export let ALPHABISBISBIS = (filter) => async (dispatch, getState) => {
  let state = getState().covid.dataBisFilter.slice();
  if (!filter) {
    state = state.sort((a, b) => (a.country > b.country ? 1 : -1));
  } else
    state.sort((a, b) =>
      filter === 'guerison'
        ? a.recovered > b.recovered
          ? -1
          : 1
        : a.recovered < b.recovered
        ? -1
        : 1
    );
  dispatch({
    type: 'ALPHABISBISBIS',
    payload: {
      data: state,
    },
  });
};

export let ALPHABISBISBISBIS = (filter) => async (dispatch, getState) => {
  let state = getState().covid.dataBisFilter.slice();
  if (!filter) {
    state = state.sort((a, b) => (a.country > b.country ? 1 : -1));
  } else
    state.sort((a, b) =>
      filter === 'critique'
        ? a.critical > b.critical
          ? -1
          : 1
        : a.critical < b.critical
        ? -1
        : 1
    );

  dispatch({
    type: 'ALPHABISBISBISBIS',
    payload: {
      data: state,
    },
  });
};

export let FILTER = (filter) => (dispatch, getState) => {
  let filterData = getState().covid.dataBis.slice();
  let filterBis = filter.toLowerCase();
  console.log(filterBis);
  if (!filter) {
    filterData = filterData.sort((a, b) => (a.country > b.country ? 1 : -1));
  } else {
    filterData = filterData.filter((p) =>
      p.country.toLowerCase().includes(filterBis)
    );
  }
  dispatch({
    type: 'FILTER',
    payload: {
      filter: filterBis,
      stateFilter: filterData,
    },
  });
};

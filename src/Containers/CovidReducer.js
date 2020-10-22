let CovidState = {
  data: [],
  filterdata: [],
  loading: false,
  error: false,
  dataBis: [],
  dataBisFilter: [],
  dataHome: [],
  dataHomeFilter: [],
  dataHomeBis: [],
  dataHomeBisFilter: [],
};

let CovidReducer = (state = CovidState, action) => {
  switch (action.type) {
    case 'FAILEDBIS':
      return Object.assign({}, state, { loading: false });
    case 'STARTHOME':
      return Object.assign({}, state, { loading: true });
    case 'STARTBIS':
      return Object.assign({}, state, { loading: true });
    case 'SUCCESBIS':
      return Object.assign({}, state, {
        loading: false,
        dataHomeBis: action.payload.data,
        dataHomeBisFilter: action.payload.data,
      });
    case 'SUCCESHOME':
      return Object.assign({}, state, {
        loading: false,
        dataHome: action.payload.data,
      });
    case 'ERRORHOME':
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    case 'START':
      return Object.assign({}, state, { loading: true });
    case 'ALPHA':
      return Object.assign({}, state, {
        dataBisFilter: action.payload.data,
      });
    case 'ALPHABIS':
      return Object.assign({}, state, {
        dataBisFilter: action.payload.data,
      });
    case 'ALPHABISBIS':
      return Object.assign({}, state, {
        dataBisFilter: action.payload.data,
      });
    case 'ALPHABISBISBISBIS':
      return Object.assign({}, state, {
        dataBisFilter: action.payload.data,
      });
    case 'ALPHABISBISBIS':
      return Object.assign({}, state, {
        dataBisFilter: action.payload.data,
      });
    case 'SUCCES':
      return Object.assign({}, state, {
        dataBis: action.payload.data,
        dataBisFilter: action.payload.data,
        loading: false,
      });
    case 'FAILED':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'FILTER':
      return Object.assign({}, state, {
        dataBisFilter: action.payload.stateFilter,
      });

    default:
      break;
  }

  return state;
};

export default CovidReducer;

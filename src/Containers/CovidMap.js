import React, { Fragment, memo, PureComponent, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";
import { connect, useSelector } from "react-redux";
import Spinner from "./Layout/Spinner";
import googleMapStyle from "../Containers/googleMapStyle";

let MapBis = memo(function MapBis(props) {
  let [state, setstate] = useState(null);
  let dataBis = useSelector((state) => state.covid.dataBisFilter);

  return (
    <Fragment>
      <GoogleMap
        defaultCenter={{ lat: 47, lng: 5 }}
        zoom={5}
        defaultOptions={{ styles: googleMapStyle, minZoom: 3 }}
      >
        {dataBis ? (
          dataBis.map((value, index) => {
            return (
              <Marker
                defaultPosition={{
                  lat: value.latitude,
                  lng: value.longitude,
                }}
                key={index}
                onClick={() => setstate(value)}
              />
            );
          })
        ) : (
          <Spinner />
        )}
        {state && (
          <InfoWindow
            position={{ lat: state.latitude, lng: state.longitude }}
            onCloseClick={() => setstate(null)}
            key={state.index}
          >
            <div
              style={{
                width: "300px",
                height: "300px",
                margin: "0px",
                paddingTop: "10px",
                paddingBottom: "20px",
                textAlign: "center",
                justifyContent: "center",
                background: "#020122",
                color: "white",
                fontSize: "1.5em",
              }}
            >
              <h3 style={{ color: "white" }}> Pays : {state.country}</h3>
              <p>Confirmé(s) : {state.confirmed}</p>
              <p> Décé(s) : {state.deaths}</p>
              <p> Guérison(s) : {state.recovered} </p>
              <p> État(s) critique(s) : {state.critical} </p>
              <span style={{ fontSize: "0.8em", marginTop: "10px" }}>
                Mise à jour le<br></br>
                {new Date(state.lastUpdate).toLocaleDateString()}
              </span>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </Fragment>
  );
});

let WrapGoogle = withScriptjs(withGoogleMap(MapBis));

class CovidMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};
  componentDidUpdate = () => {};
  render() {
    return (
      <Fragment>
        <div style={{ width: "100vw", height: "100vh", position: "fixed" }}>
          <WrapGoogle
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNn9x1XCVMaeTSlw5T1vtWDaUQXsXej7c&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.covid.dataBis,
    dataBis: state.covid.dataBisFilter,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CovidMap);

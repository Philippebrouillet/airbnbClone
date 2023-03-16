import React from "react";

import ReactMapGL, { Marker } from "react-map-gl";

function Mapee() {
  const [viewport, setViewport] = React.useState({
    latitude: 48.866666,
    longitude: 2.333333,
    zoom: 13,
    pitch: 0,
    bearing: 0,
  });
  return (
    <ReactMapGL
      mapboxAccessToken={process.env.NEXT_PUBLIC_mapbox_key}
      initialViewState={{
        ...viewport,
      }}
      mapStyle="mapbox://styles/philippebr/clfabfqh3004g01pj2nl50mzg"
      width="100%"
      height="100%"
      onMove={(e) => (
        (e.target._markers[0]._pos.y = 0),
        (e.target._markers[0]._pos.x = 0),
        console.log(e.target._markers[0])
      )}
    >
      <Marker
        longitude={2.333333}
        latitude={48.866666}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <p>❓</p>
      </Marker>
    </ReactMapGL>
  );
}

export default Mapee;

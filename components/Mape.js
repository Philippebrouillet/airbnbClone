import getCenter from "geolib/es/getCenter";

import Image from "next/image";
import React from "react";
import Map, { Marker } from "react-map-gl";
import point from "../assets/location-pin.png";
function Mape({ searchData }) {
  //trans

  const coordinates = searchData.map((data) => ({
    longitude: data.long,
    latitude: data.lat,
  }));

  const center = getCenter(coordinates);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_mapbox_key}
      mapStyle="mapbox://styles/philippebr/clfabfqh3004g01pj2nl50mzg"
      initialViewState={{
        longitude: "2.333333",
        latitude: "48.866667",
        zoom: 12,
      }}
    >
      {searchData.map((marker, i) => (
        <div key={i}>
          <Marker longitude={marker.long} latitude={marker.lat} anchor="center">
            <Image
              src={point}
              alt="alo"
              style={{ height: "30px", width: "30px" }}
            />
          </Marker>
        </div>
      ))}
    </Map>
  );
}

export default Mape;

import React, { useState, useRef, useEffect } from 'react';
import ReactMapGl, {
  Marker,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './Geocoder';

const AddLocation = () => {
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const mapRef = useRef();

  useEffect(() => {
    if (!lng && !lat) {
      fetch('https://ipapi.co/json/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });
          setLng(data.longitude);
          setLat(data.latitude);
        });
    }
  }, []);

  return (
    <div className="container h-full relative">
      <ReactMapGl
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 8,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          longitude={0}
          latitude={0}
          draggable
          onDragEnd={(event) => {
            console.log(event.lngLat);
          }}
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation={true}
          onGeolocate={(event) => {
            console.log(event);
          }}
        />
        <Geocoder />
      </ReactMapGl>
    </div>
  );
};

export default AddLocation;

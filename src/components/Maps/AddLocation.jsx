import React, { useState, useRef, useEffect } from 'react';
import ReactMapGl, {
  Marker,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Geocoder from './Geocoder';
import { useValue } from '@/context/ContextProvider';

const AddLocation = () => {
  const { state, dispatch } = useValue();
  const { location } = state;
  const mapRef = useRef();

  console.log('Map Location', state.location.text);

  useEffect(() => {
    if (!location.lng && !location.lat) {
      fetch('https://ipapi.co/json/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });
          dispatch({
            type: 'UPDATE_LOCATION',
            payload: {
              lng: data.longitude,
              lat: data.latitude,
            },
          });
        });
    }
  }, []);

  return (
    <div className="container h-full relative">
      <ReactMapGl
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: location.lng,
          latitude: location.lat,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          longitude={0}
          latitude={0}
          draggable
          onDragEnd={(ev) =>
            dispatch({
              type: 'UPDATE_LOCATION',
              payload: {
                lng: ev.lngLat.lng,
                lat: ev.lngLat.lat,
              },
            })
          }
        />

        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(ev) =>
            dispatch({
              type: 'UPDATE_LOCATION',
              payload: {
                lng: ev.coords.longitude,
                lat: ev.coords.latitude,
              },
            })
          }
        />
        <Geocoder />
      </ReactMapGl>
    </div>
  );
};

export default AddLocation;

import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Map, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from 'react-map-gl';
import styles from '../../styles/components/Maps/MapNavigation.module.css';

const MapNavigation = () => {
  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        marginTop: '125px',
      }}
    >
      <div>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            pitch: 45,
            width: 400,
            height: 400,
            attributionControl: false,
            longitude: -70.64827,
            latitude: -33.45694,
            zoom: 12,
            style: {
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            },
          }}
          mapStyle={'mapbox://styles/mapbox/streets-v12'}
          style={{
            width: 'auto',
            height: '500px',
            borderRadius: '15px',
          }}
        >
          <NavigationControl />
          <GeolocateControl />
          <FullscreenControl />
        </Map>
      </div>
    </div>
  );
};

export default MapNavigation;

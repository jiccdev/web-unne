import React from 'react';
import MapBoxGeoCoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from '../../hooks/useControl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from 'mapbox-gl';

const Geocoder = () => {
  const [lng, setLng] = React.useState(0);
  const [lat, setLat] = React.useState(0);

  const ctrl = new MapBoxGeoCoder({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    mapboxgl: mapboxgl,
    placeholder: 'Search for places',
    zoom: 10,
    marker: false,
    collapsed: true,
  });

  useControl(() => ctrl);

  ctrl.on('result', (event) => {
    const coords = event.result.geometry.coordinates;
    setLng(coords);
    setLat(coords[1]);
  });

  return null;
};

export default Geocoder;

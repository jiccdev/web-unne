import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import { parseToCLPCurrency } from '@/utils';
import CardMap from './CardMap';

const ReactMap = ({ longitudeProp, latitudeProp, property }) => {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: latitudeProp,
    longitude: longitudeProp,
    zoom: 18,
    dragPan: true,
  });

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude: latitudeProp,
      longitude: longitudeProp,
      zoom: 18,
      dragPan: true,
    });
  }, [mapRef, longitudeProp, latitudeProp]);

  return (
    <div className="container">
      <Map
        {...viewport}
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        initialViewState={{
          pitch: 45,
          width: 400,
          height: 900,
          attributionControl: true,
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v12'}
        style={{
          width: 'auto',
          height: '400px',
          borderRadius: '15px',
          padding: '2rem',
          margin: '1.5rem',
          width: 'auto',
          height: '70vh',
          borderRadius: '15px',
        }}
      >
        <Marker
          latitude={latitudeProp}
          longitude={longitudeProp}
          offsetLeft={-20}
          offsetTop={-10}
          style={{
            cursor: 'pointer',
            zIndex: 100,
            margin: '0',
            padding: '0',
          }}
          onClick={() => setShowPopup(!showPopup)}
        >
          {showPopup && (
            <Popup
              longitude={longitudeProp}
              latitude={latitudeProp}
              onClose={() => setShowPopup(false)}
              anchor="bottom"
              closeButton={false}
              closeOnClick={false}
              dynamicPosition={true}
              focusAfterOpen={false}
              offsetTop={-10}
              offsetLeft={-10}
              closeOnMove={false}
              style={{
                zIndex: 100,
                cursor: 'pointer',
              }}
            >
              <CardMap property={property} />
            </Popup>
          )}
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;

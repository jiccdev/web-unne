import React, { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Map, {
    Marker,
    NavigationControl,
    GeolocateControl,
    FullscreenControl,
} from 'react-map-gl';

const MapHome = () => {

    return (
        <div
            style={{
                height: 'auto',
                width: '100%',
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
                        longitude: -70.5856444039788,
                        latitude: -33.41615765,
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
                        height: '400px',
                        borderRadius: '15px',
                    }}


                >
                    <Marker longitude={-70.5856444039788} latitude={-33.41615765} />
                    <NavigationControl />
                    <GeolocateControl />

                </Map>
            </div>
        </div>
    );
};

export default MapHome;






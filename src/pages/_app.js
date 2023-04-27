import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import ContextProvider from '../context/ContextProvider';
import PropertiesProvider from '@/context/properties/PropertiesProvider';
import ClientsProvider from '@/context/clients/ClientsProvider';
import SelectsProvider from '@/context/selects/SelectsProvider';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <PropertiesProvider>
        <ClientsProvider>
          <SelectsProvider>
            <Component {...pageProps} />
          </SelectsProvider>
        </ClientsProvider>
      </PropertiesProvider>
    </ContextProvider>
  );
}

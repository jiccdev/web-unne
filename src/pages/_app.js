import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import ContextProvider from '../context/ContextProvider';
import ClientsProvider from '@/context/clients/ClientsProvider';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <ClientsProvider>
        <Component {...pageProps} />
      </ClientsProvider>
    </ContextProvider>
  );
}

import '@/styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ClientsProvider from '@/context/clients/ClientsProvider';

export default function App({ Component, pageProps }) {
  return (
    <ClientsProvider>
      <Component {...pageProps} />
    </ClientsProvider>
  );
}

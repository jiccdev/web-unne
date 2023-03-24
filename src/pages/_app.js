import '@/styles/globals.css';
import ClientsProvider from '@/context/clients/ClientsProvider';

export default function App({ Component, pageProps }) {
  return (
    <ClientsProvider>
      <Component {...pageProps} />
    </ClientsProvider>
  );
}

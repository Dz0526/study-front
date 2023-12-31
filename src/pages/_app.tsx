import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from 'themes/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: 'top-right' } }}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

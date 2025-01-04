import type { AppType } from 'next/app';
import 'src/shared/styles/reset.scss';
import 'src/shared/styles/base.scss';
import { CartStoreProvider } from 'src/shared/store/cart';
import QueryProvider from 'src/appFsd/QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider } from '@mantine/core';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <QueryProvider>
      <CartStoreProvider>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </CartStoreProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
};
export default App;

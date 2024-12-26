import type { AppType } from 'next/app';
import 'src/shared/styles/reset.scss';
import 'src/shared/styles/base.scss';
import { CartStoreProvider } from 'src/shared/store/cart';
import QueryProvider from 'src/appFsd/QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <QueryProvider>
      <CartStoreProvider>
        <Component {...pageProps} />
      </CartStoreProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
};
export default App;

import type { AppType } from 'next/app';
import 'src/shared/styles/reset.scss';
import 'src/shared/styles/base.scss';
import { CartStoreProvider } from 'src/shared/store/cart';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <CartStoreProvider>
      <Component {...pageProps} />
    </CartStoreProvider>
  );
};
export default App;

import type { AppType } from 'next/app';
import '../shared/styles/reset.scss';
import '../shared/styles/base.scss';
import { CartStoreProvider } from '../shared/store/cart';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <CartStoreProvider>
      <Component {...pageProps} />
    </CartStoreProvider>
  );
};
export default App;

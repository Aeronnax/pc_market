import type { AppType } from 'next/app';
import '../shared/styles/reset.scss';
import '../shared/styles/base.scss';

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default App;

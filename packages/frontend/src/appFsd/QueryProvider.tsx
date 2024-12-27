import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { FC, ReactNode } from 'react';

export interface QueryProviderProps {
  children?: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: (_, error) => {
        if (!(error instanceof AxiosError)) {
          return false;
        }
        if (error.code === AxiosError.ERR_NETWORK) {
          return true;
        }
        return false;
      },
      retryDelay: 5 * 1000,
      staleTime: 0,
      networkMode: 'always',
    },
  },
});

const QueryProvider: FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;

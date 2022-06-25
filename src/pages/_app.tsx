import React, { useState } from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import queryClient from '@app/shared/utils/query-client';

import '@app/shared/styles/globals.css';

function Application({ Component, pageProps }: AppProps): JSX.Element {
  const [stateQueryClient] = useState(() => queryClient);

  return (
    <QueryClientProvider client={stateQueryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default Application;

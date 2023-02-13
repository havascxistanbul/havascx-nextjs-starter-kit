import React, { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import queryClient from '@app/shared/utils/query-client';

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

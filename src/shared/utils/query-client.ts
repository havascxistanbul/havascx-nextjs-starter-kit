import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

export default queryClient;

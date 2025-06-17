"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// to make caching and handle cahcing and operation
const queryClient = new QueryClient();

// query provider ensures that we have ability to useQuery or useMutation, and so on
function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;

"use client";
import Header from "@/app/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

 const  queryClient = new QueryClient()

function QueryProvider({ children }: { children: React.ReactNode }) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
{children}
        </QueryClientProvider>
  );
}

export default QueryProvider;

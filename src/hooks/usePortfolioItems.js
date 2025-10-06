import { useQuery } from '@apollo/client/react';
import { GET_PORTFOLIO_ITEMS } from '../graphql/queries';

export default function usePortfolioItems() {
  const { data, loading, error } = useQuery(GET_PORTFOLIO_ITEMS);

  return {
    posts: data?.portfolioItems?.nodes || [],
    loading,
    error,
  };
}
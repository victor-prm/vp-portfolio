import { useQuery } from '@apollo/client/react';
import { GET_MAIN_NAVIGATION } from '../graphql/queries';

export default function useMainNavigation() {
  const { data, loading, error } = useQuery(GET_MAIN_NAVIGATION);

  return {
    menuSet: data?.menuSets?.nodes?.[0] || null, // just the first match
    loading,
    error,
  };
}
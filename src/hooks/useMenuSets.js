import { useQuery } from '@apollo/client/react';
import { GET_MENU_SETS } from '../graphql/queries';

export default function useMenuSets() {
  const { data, loading, error } = useQuery(GET_MENU_SETS);

  return {
    menuSets: data?.menuSets?.nodes || [],
    loading,
    error,
  };
}
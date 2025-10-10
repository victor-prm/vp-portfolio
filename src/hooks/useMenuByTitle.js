import { useQuery } from '@apollo/client/react';
import { GET_MENU_BY_TITLE } from '../graphql/queries';

export default function useMenuByTitle(title = "Main Navigation") {
  const { data, loading, error } = useQuery(GET_MENU_BY_TITLE, {
    variables: { title },
  });

  return {
    menuSet: data?.menuSets?.nodes?.[0] || null,
    loading,
    error,
  };
}
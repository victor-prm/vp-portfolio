import { useQuery } from "@apollo/client/react";
import { GET_PAGE_BY_ID } from "../graphql/queries";

export function usePageById(id) {
  const { data, loading, error } = useQuery(GET_PAGE_BY_ID, {
    variables: { id },
  });

  return {
    page: data?.pageBy,
    loading,
    error,
  };
}
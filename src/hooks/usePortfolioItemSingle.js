import { useQuery } from "@apollo/client/react";
import { GET_PORTFOLIO_ITEM_SINGLE } from "../graphql/queries";

export default function usePortfolioItemSingle(slug) {
  const { data, loading, error } = useQuery(GET_PORTFOLIO_ITEM_SINGLE, {
    variables: { slug },
    skip: !slug, // prevents running until slug is available
  });

  return {
    item: data?.portfolioItemBy || null,
    loading,
    error,
  };
}
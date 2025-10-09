import { useParams } from "react-router";
import usePortfolioItemSingle from "../hooks/usePortfolioItemSingle";

export default function Post() {
  const { slug } = useParams();
  const { item, loading, error } = usePortfolioItemSingle(slug);

  console.log(item)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!item) return <p>Not found</p>;

  return (
    <article>
      <h1>{item.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: item.content }} />
    </article>
  );
}
import parse from "html-react-parser";
import { usePageById } from "../hooks/usePageById";
import TwoColumnLayout from "../components/TwoColumnLayout";

export default function Home() {
  // Fetch CMS content for home page
  const { page, loading, error } = usePageById("cG9zdDoyNDc="); // Replace with your home page ID

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const featuredImage = page?.featuredImage?.node;

  return (
    <TwoColumnLayout
      left={
         featuredImage && (<img
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText || featuredImage.title || "Featured image"}
              className="w-full max-w-3xl mx-auto mb-6 rounded-[100vh] 
              border-vp-gray-500/40 border-2 shadow-vp-gray-700/10 shadow-md"
              width={featuredImage.mediaDetails?.width}
              height={featuredImage.mediaDetails?.height}
            />)
      }
      right={ 
        <div className="home-page mt-4">

          {parse(page?.content || "<p>Welcome!</p>", {
            replace: domNode => {
              if (domNode.name === "h2" && domNode.children) {
                const text = domNode.children
                  .map(child => (child.data ? child.data : ""))
                  .join("");
                return <p className="text-vp-gray-100 mb-4 text-8xl sm:text-9xl">{text}</p>;
              }
              if (domNode.name === "p" && domNode.children) {
                const text = domNode.children
                  .map(child => (child.data ? child.data : ""))
                  .join("");
                return <p className="text-vp-gray-500 mb-4 text-xl">{text}</p>;
              }
            },
          })}
        </div>
      }
    />
  );
}
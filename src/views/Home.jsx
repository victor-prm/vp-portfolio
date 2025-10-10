import React from "react";
import { usePageById } from "../hooks/usePageById"; // optional hook if fetching content
import TwoColumnLayout from "../components/TwoColumnLayout";
// import any other components like Layout, Hero, etc.

export default function Home() {
  // Example: fetch CMS content for home page
  const { page, loading, error } = usePageById("cG9zdDoyNDc="); // replace with your home page ID

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <TwoColumnLayout
      right={
        <div className="home-page">
          <div
            className="prose prose-invert mt-4"
            dangerouslySetInnerHTML={{ __html: page?.content || "<p>Welcome to the homepage!</p>" }}
          />
        </div>
      }

    />


  );
}
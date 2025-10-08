import { useEffect, useRef } from "react";
import MiniMasonry from "../lib/masonry.min";

export default function MasonryGrid({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const masonry = new MiniMasonry({
      container: containerRef.current,
      baseWidth: 320,
      gutterX: 16,
      gutterY: 16,
      ultimateGutter: 16,
      surroundingGutter: false,
      minify: true,
    });

    // Re-layout when window resizes
    const handleResize = () => masonry.layout();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      masonry.destroy();
    };
  }, []);

  // Wrap each direct child in a "masonry-item"
  const wrappedChildren = Array.isArray(children)
    ? children.map((child, idx) => (
        <div key={idx} className="masonry-item w-auto box-border absolute">
          {child}
        </div>
      ))
    : <article className="masonry-item w-auto box-border absolute">{children}</article>;

  return (
    <div ref={containerRef} className="masonry min-h-full relative">
      {wrappedChildren}
    </div>
  );
}
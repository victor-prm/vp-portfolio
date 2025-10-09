import { useEffect, useRef } from "react";
import MiniMasonry from "../lib/masonry.min";

export default function MasonryGrid({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const masonry = new MiniMasonry({
      container: containerRef.current,
      baseWidth: 256,
      gutterX: 4,
      gutterY: 8,
      ultimateGutter: 4,
      surroundingGutter: false,
      minify: true,
      wedge: true
    });

    // Re-layout when window resizes
    const handleResize = () => masonry.layout();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      masonry.destroy();
    };
  }, [children]);

  return (
    <div ref={containerRef} className="masonry relative w-full">
      {children.length > 0 ? (
        children.map((child, idx) => (
          <div key={idx} className="masonry-item w-auto box-border absolute">
            {child}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No items</p>
      )}
    </div>
  );
}
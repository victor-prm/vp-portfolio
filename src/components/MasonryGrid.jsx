import { useEffect, useRef, useState } from "react";
import MiniMasonry from "../lib/masonry.min";

export default function MasonryGrid({ children }) {
  const containerRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(256);

  useEffect(() => {
    const handleResize = () => {
      setBaseWidth(window.innerWidth < 640 ? 180 : 224);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const masonry = new MiniMasonry({
      container: containerRef.current,
      baseWidth,
      gutterX: 4,
      gutterY: 8,
      ultimateGutter: 4,
      surroundingGutter: false,
      minify: false,
      wedge: true,
    });

    const relayout = () => masonry.layout();

    // Initial layout
    masonry.layout();

    // 🖼️ Re-layout when all images have loaded
    const images = containerRef.current.querySelectorAll("img");
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) loadedCount++;
      else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) relayout();
        });
        img.addEventListener("error", () => {
          loadedCount++;
          if (loadedCount === images.length) relayout();
        });
      }
    });

    // 🧯 Fallback re-layout after 1s (safety)
    //const timeout = setTimeout(relayout, 1000);

    return () => {
      //clearTimeout(timeout);
      masonry.destroy();
    };
  }, [children, baseWidth]);

  return (
    <div ref={containerRef} className="masonry relative w-full">
      {children.map((child, idx) => (
        <div key={idx} className="masonry-item w-auto box-border absolute">
          {child}
        </div>
      ))}
    </div>
  );
}
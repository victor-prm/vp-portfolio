import { useEffect } from "react";

export default function TestError() {
  useEffect(() => {
    // simulate an error only after mount
    throw new Error("Simulated runtime error in component");
  }, []);

  return <div>This will trigger an ErrorBoundary.</div>;
}
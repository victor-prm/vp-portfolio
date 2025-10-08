import { useLocation } from "react-router";

export default function usePageTitle() {
  const location = useLocation();

  // Full pathname: "/projects/school"
  const { pathname, search } = location;

  // Extract the first segment after "/"
  const segments = pathname.split("/").filter(Boolean); // removes empty strings

  // First segment as "page"
  const page = segments[0] || "home"; // fallback to 'home' if "/"

  // Optional: include query string
  const query = search; // e.g., "?type=school"

  return { page, segments, query, pathname };
}
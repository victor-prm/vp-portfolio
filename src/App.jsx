import { RouterProvider, createBrowserRouter } from "react-router";
import { routes } from "./router/Routes";
import { Suspense } from "react";

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
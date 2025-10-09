import { createRoutesFromElements, Route } from "react-router";
import Layout from "./Layout";
import Home from "../views/Home";
import Projects from "../views/Projects";
import Post from "../views/Post";
import NotFoundPage from "../errors/404";
import ErrorPage from "../errors/ErrorPage";
import ErrorBoundary from "../errors/ErrorBoundary";

export const routes = createRoutesFromElements(
  <Route
    path="/"
    element={
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    }
    errorElement={<ErrorPage />}
  >
    <Route index element={<Home />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/:slug" element={<Post />} />

    {/* Catch-all 404 */}
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);
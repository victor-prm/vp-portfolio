import { createRoutesFromElements } from "react-router";
import { Route } from "react-router";
import Layout from "./Layout";
import Home from "../views/Home"
import Projects from "../views/Projects";
import Post from "../views/Post";
import NotFoundPage from "../views/404";

export const routes = createRoutesFromElements(
  <Route 
  path="/" 
  element={<Layout />}
  errorElement={<NotFoundPage />}
  >
    <Route index element={<Home />} />
    <Route path="projects" element={<Projects />} />
    <Route path="post/:id" element={<Post />} />
  </Route>
);
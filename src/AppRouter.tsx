import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/loader";
const Home = lazy(() => import("./pages/home"));
const Blog = lazy(() => import("./pages/blog"));
const Projects = lazy(() => import("./pages/projects"));
const BlogPost = lazy(() => import("./pages/blog-post"));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/portfolio'>
          <Route
            index
            element={<Navigate to='/portfolio/home' />}
          />

          <Route
            path='home'
            element={<Home />}
          />
          <Route path='blog'>
            <Route
              index
              element={<Blog />}
            />

            <Route
              path=':id'
              element={<BlogPost />}
            />
          </Route>
          <Route
            path='projects'
            element={<Projects />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

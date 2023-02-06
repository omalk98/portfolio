import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/loader/Loader';
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Projects = lazy(() => import('./pages/Projects'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/portfolio"
          element={<Navigate to="/portfolio/home" />}
        />
        <Route
          path="/portfolio/home"
          element={<Home />}
        />
        <Route
          path="/portfolio/blog"
          element={<Blog />}
        />
        <Route
          path="/portfolio/blog/:id"
          element={<BlogPost />}
        />
        <Route
          path="/portfolio/projects"
          element={<Projects />}
        />
      </Routes>
    </Suspense>
  );
}

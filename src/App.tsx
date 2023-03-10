import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader';
const AppRouter = lazy(() => import('./AppRouter'));
const Header = lazy(() => import('./components/header'));
const Footer = lazy(() => import('./components/footer'));
import './App.css';

function App() {
  useEffect(() => {
    if (import.meta.env.VITE_MAILER_URL)
      fetch(import.meta.env.VITE_MAILER_URL, {
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION,
          'Content-Type': 'application/json'
        }
      });
  }, []);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Header />
            <main className="page">
              <AppRouter />
            </main>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </div>
      <div className="waves" />
    </>
  );
}

export default App;

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
const AppRouter = lazy(() => import('./AppRouter'));
const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));
import './App.css';

function App() {
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

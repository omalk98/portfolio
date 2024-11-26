import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { themeToggle } from './lib/utils.ts';
import './index.css'

// Optionally, you can use useEffect to set the initial theme based on the user's preference
const setInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.body.classList.add(storedTheme);
    return;
  }
  
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  themeToggle(prefersDarkScheme, false);
};

setInitialTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

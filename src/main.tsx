import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import DocsPage from './pages/DocsPage';
import './index.css';

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

function render() {
  if (window.location.hash === '#/docs') {
    root.render(
      <StrictMode>
        <DocsPage />
      </StrictMode>
    );
  } else {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

window.addEventListener('hashchange', render);
render();

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page" aria-labelledby="app-title">
      <h1 id="app-title">GitHub Copilot Budgets in Action</h1>
      <footer>
        (c) Anton Sizikov -{' '}
        <a href="https://github.com/asizikov" target="_blank" rel="noreferrer">
          @asizikov
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

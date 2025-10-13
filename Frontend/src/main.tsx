import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import StartPage from './pages/startpage'
import App from "./App";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

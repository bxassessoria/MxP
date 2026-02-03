import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Build timestamp: 2026-01-28 18:35 - Force Vercel Deploy
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

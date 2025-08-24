import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClubPage from "./ClubPage.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clubs/:id" element={<ClubPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

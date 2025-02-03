import React, { useState, useEffect, useContext } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/router";
import ToothCupGame from "./components/User/ElliminationGame"
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "./context/LanguageContext";

const router = createBrowserRouter(ROUTES);

function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const { darkMode } = useContext(LanguageContext);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      {isOffline ? (
        <ToothCupGame /> // İnternet kəsiləndə oyun açılır
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;


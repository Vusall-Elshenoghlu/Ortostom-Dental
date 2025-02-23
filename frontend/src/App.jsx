import React, { useState, useEffect, useContext } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "./context/LanguageContext";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Helmet, HelmetProvider } from "react-helmet-async";
import ToothCupGame from "./components/User/ToothCupGame";

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
      <HelmetProvider>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {isOffline ? (
          <ToothCupGame />
        ) : (
          <RouterProvider router={router} />
        )}
      </HelmetProvider>
    </>
  );
}

export default App;

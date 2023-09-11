import React, { createContext, useContext, useState, useEffect } from 'react';
import Navbar from "../../components/navbar/Navbar";
import ErrorPopup from "../../components/error_popup/ErrorPopup";
import { PageLoaderProvider } from '../../contexts/PageLoaderProvider/PageLoaderProvider';
import { Outlet } from "react-router-dom";

const ErrorContext = createContext({});

export const useError = () => {
    return useContext(ErrorContext);
  };
  
export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState("An internal error occured during your request!");
    const [popupVisible, setPopupVisible] = useState(false);

    const showError = (message) => {
        if (message) {
          setError(message);
        }
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
  };

  return (
    <ErrorContext.Provider value={showError}>
      {children}
      {<ErrorPopup setPopupVisible={setPopupVisible} message={error} popupVisible={ popupVisible } />}
    </ErrorContext.Provider>
  );
};

export default function Root() { 

    return (
      <div>
          <PageLoaderProvider>
            <ErrorProvider>
                  <Navbar />
                  <Outlet />
            </ErrorProvider>
          </PageLoaderProvider>
        </div>
    )
}
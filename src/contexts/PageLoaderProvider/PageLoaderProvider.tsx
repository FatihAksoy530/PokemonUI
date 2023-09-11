import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import "./PageLoaderProvider.css";

const PageLoaderContext = createContext({});

export const usePageLoader = () => {
    return useContext(PageLoaderContext);
};

export const PageLoaderProvider = ({ children }) => {
    const location = useLocation();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    const pendingStart = useRef(false);
    const pendingFinish = useRef(false);
    const hasStarted = useRef(false);

    const increaseProgress = () => {
        setLoadingProgress(prev => {
            if (prev >= 100) {
                setIsLoadingComplete(true);
                return 100;
            }
            return Math.min(prev + 10, 100);
        });
    };

    useEffect(() => {
        if (!hasStarted.current) {
            pendingStart.current = true;
            hasStarted.current = true;
        }
    }, [location]);

    useEffect(() => {
        if (pendingStart.current && !pendingFinish.current) {
            setIsLoadingComplete(false);
            setLoadingProgress(0);
            const interval = setInterval(increaseProgress, 200);

            return () => clearInterval(interval);
        } else if (pendingStart.current && pendingFinish.current) {
            setLoadingProgress(100);
            setIsLoadingComplete(true);

            pendingStart.current = false;
            pendingFinish.current = false;
            hasStarted.current = false;
        }
    }, [location]);

    const finishLoading = () => {
        pendingFinish.current = true;
        if (pendingStart.current) {
            setLoadingProgress(100);
            setIsLoadingComplete(true);

            pendingStart.current = false;
            pendingFinish.current = false;
            hasStarted.current = false;
        }
    };

    const contextValue = {
        finishLoading: finishLoading
    };

    return (
        <PageLoaderContext.Provider value={contextValue}>
            <div 
                className={`page-loader-bar ${isLoadingComplete ? 'hide' : ''}`} 
                style={{ width: `${loadingProgress}%` }} 
            />
            {children}
        </PageLoaderContext.Provider>
    );
}
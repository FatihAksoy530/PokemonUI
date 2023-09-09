import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import Root from './routes/root/Root.tsx';
import ErrorPage from './ErrorPage.tsx';
import CardDetailsPage, {
  loader as cardDetailsPageLoader,
} from './components/card_details_page/CardDetailsPage.tsx';
import HomePage from './components/home_page/HomePage.tsx';
import './index.css';
import './css_reset.css';
import './variables.css';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "cards/:cardId",
        element: <CardDetailsPage />,
        loader: cardDetailsPageLoader,
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

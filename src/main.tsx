import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root/Root.tsx';
import ErrorPage from './ErrorPage.tsx';
import CardDetailsPage from './components/card_details_page/CardDetailsPage.tsx';
import HomePage from './routes/home/HomePage.tsx';
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
        element: <HomePage />
      },
      {
        path: "cards/:cardId",
        element: <CardDetailsPage />,
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

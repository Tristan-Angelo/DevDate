import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import UserView from './pages/UserView';
import HomePage from './pages/user/HomePage/HomePage';
import MessagesPage from './pages/user/MessagesPage/MessagesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/loginPage',
    element: <LoginPage />,
  },
  {
    path: '/registrationPage',
    element: <RegistrationPage />,
  },
  {
    path: '/user',
    element: <UserView />,
    children: [
      {
        path: 'homePage',
        element: <HomePage />,
      },
      {
        path: 'messagesPage',
        element: <MessagesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

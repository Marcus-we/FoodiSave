import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import RecipePage from './pages/RecipePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Layout from './pages/Layout.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element: (
          <HomePage/>
        ),
      },
      {
        path:"/login",
        element: (
          <LoginPage/>
        ),
      },
      {
        path:"/signup",
        element: (
          <SignupPage/>
        ),
      },
      {
        path:"/recipe",
        element: (
          <RecipePage/>
        ),
      },
      {
        path:"/search",
        element: (
          <SearchPage/>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
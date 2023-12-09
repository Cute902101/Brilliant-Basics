import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Store from './Pages/Store.jsx';
import MobileCart from './Pages/MobileCart.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/Brilliant-Basics/",
    element: <App/>
  },
  {
    path: "/Brilliant-Basics/store",
    element: <Store/>,
  },
  {
    path: "/Brilliant-Basics/MobileCart",
    element: <MobileCart/>
  }
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
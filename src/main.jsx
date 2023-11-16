import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Store from './Pages/Store.jsx';
import './index.css';

const basename = "/Brilliant-Basics";

const router = createBrowserRouter([
  {
    path: `${basename}/`,
    element: <App/>
  },
  {
    path: `${basename}/store`,
    element: <Store/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
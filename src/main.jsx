import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/BasicRoutes.jsx'

import {  HelmetProvider } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
// import LoginContext from './context/loginContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <HelmetProvider>
        <RouterProvider router={router} />
        <ToastContainer position='bottom-center' />
      </HelmetProvider>
    
  </StrictMode>,
)

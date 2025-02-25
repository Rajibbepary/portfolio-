import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import {HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <div className='bg-[#111122]'>
    <RouterProvider router={router} />
    </div>
  </HelmetProvider>
  </StrictMode>,
)

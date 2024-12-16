import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { ToastBar, Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster
    position="top-left"
    />
    </AuthProvider>
  </StrictMode>,
)

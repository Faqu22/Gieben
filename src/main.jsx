import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop'
import Us from './pages/Us'
import Contact from './pages/Contact'

const router = createHashRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/shop',
        element: <Shop />,
    },
    {
        path: '/us',
        element: <Us />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

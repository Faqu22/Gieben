import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop'
// import About from './pages/About.jsx'
// import Resume from './pages/Resume'

const router = createHashRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/tienda',
        element: <Shop />,
    },
    // {
    //     path: '/projects',
    //     element: <Projects />,
    // },
    // {
    //     path: '/resume',
    //     element: <Resume />,
    // },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

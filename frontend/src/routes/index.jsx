import { createBrowserRouter } from 'react-router-dom'
import GuestLayout from '@pages/_layouts/GuestLayout'
import Home from '@pages/home'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
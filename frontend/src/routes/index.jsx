import { createBrowserRouter } from 'react-router-dom'
import {
    GuestLayout,
    Home,
    SignIn
} from '@pages/index'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/auth/sign-in',
                element: <SignIn />
            }
        ]
    }
])
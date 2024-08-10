import { createBrowserRouter } from 'react-router-dom'
import GuestRoute from '@routes/GuestRoute'
import PrivateRoute from '@routes/PrivateRoute'
import {
    GuestLayout,
    AppLayout,
    Home,
    Dashboard,
    SignIn
} from '@pages/index'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <GuestRoute><GuestLayout /></GuestRoute>,
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
    },
    {
        path: '/',
        element: <PrivateRoute><AppLayout /></PrivateRoute>,
        children: [
            {
                path: '/main/user',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '*',
        element: <h1 className='text-black'>Not Found</h1>
    }
])
import { createBrowserRouter } from 'react-router-dom'
import { GuestRoute } from '@routes/GuestRoute'
import {
    GuestLayout,
    Home,
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
        path: '*',
        element: <h1 className='text-black'>Not Found</h1>
    }
])
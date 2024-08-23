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
import { AppScreens, AdminScreens } from '../pages/app/index.app'
import PrivateAdminRoute from './PrivateAdminRoute'


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
                path: '/main/user/',
                element: <Dashboard />,
                children: [
                    {
                        path: 'my-account',
                        element: <AppScreens.AppMyAccount />
                    }, {
                        path: 'favorites',
                        element: <AppScreens.AppFavorites />
                    }, {
                        path: 'recents',
                        element: <AppScreens.AppRecents />
                    }, {
                        path: 'wish-list',
                        element: <AppScreens.AppWishList />
                    }, {
                        path: 'user-management',
                        element: <PrivateAdminRoute><AppScreens.AppUserManagement /></PrivateAdminRoute>,
                        children: [
                            {
                                path: "delete",
                                element: <AdminScreens.AdminDelete />
                            }
                        ]
                    }, {
                        path: 'faq',
                        element: <AppScreens.AppFaq />
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <h1 className='text-black'>Not Found</h1>
    }
])
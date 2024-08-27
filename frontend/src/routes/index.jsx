import { createBrowserRouter } from 'react-router-dom'

import GuestRoute from '@routes/GuestRoute'
import PrivateRoute from '@routes/PrivateRoute'
import PrivateAdminRoute from '@routes/PrivateAdminRoute'

import {
    GuestLayout,
    AppLayout,
    Home,
    Dashboard,
    SignIn
} from '@pages/index'
import { AppScreens, AdminScreens } from '@pages/app/index.app'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <GuestRoute><GuestLayout /></GuestRoute>,
        children: [
            {
                path: '/',
                index: true,
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
                    },
                    {
                        path: 'user-management',
                        element: <PrivateAdminRoute><AppScreens.AppUserManagement /></PrivateAdminRoute>,
                        children: [
                            {
                                path: "create",
                                element: <AdminScreens.AdminCreate />
                            },
                            {
                                path: "delete",
                                element: <AdminScreens.AdminDelete />
                            },
                            {
                                path: "all-users",
                                element: <AdminScreens.AdminAllUsers />,
                                children: [
                                    {
                                        path: "user/:id",
                                        element: <AdminScreens.AdminUserPage />
                                    }
                                ]
                            }
                        ]
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
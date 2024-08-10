import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@components/navbar'
import { logout } from '../../api/index'

import { setAuth } from '../../redux/user/userSlice'
import { useDispatch } from 'react-redux'

function AppLayout() {

    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Fragment>
            <Navbar handleLogout={handleLogout} />
            <Outlet />
        </Fragment>
    )
}

export default AppLayout
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function GuestLayout() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

export default GuestLayout

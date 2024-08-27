import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@components/navbar'
import Footer from '@components/footer'

function GuestLayout() {
    return (
        <Fragment>
            <Navbar />
            <section>
                <Outlet />
            </section>
            <Footer />
        </Fragment>
    )
}

export default GuestLayout

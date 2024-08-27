import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { logout } from '@api/index'
import { Navbar } from '@components/navbar'
import Footer from '@components/footer'
import { useSelector, useDispatch } from 'react-redux'
import { LoaderCircle } from 'lucide-react'
import { setAuth } from '@redux/user/userSlice'



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

    const { user } = useSelector((state) => state.auth)

    if (!user) {
        setTimeout(() => {
            window.location.reload()
        }, 1000)

        return (
            <div className='min-h-screen flex items-center justify-center'>
                <LoaderCircle className='animate-spin text-[#323c99]' />
            </div>
        )
    }

    return (
        <Fragment>
            <Navbar handleLogout={handleLogout} />
            <section>
                <Outlet />
            </section>
            <Footer />
        </Fragment>
    )
}

export default AppLayout
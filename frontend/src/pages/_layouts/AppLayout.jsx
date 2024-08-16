import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@components/navbar'
import { logout } from '../../api/index'
import { useSelector } from 'react-redux'
import { LoaderCircle } from 'lucide-react'

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
            <footer className="shadow dark:bg-gray-900 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg" className="h-14" alt="IFPE Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IFPE</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Início</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">IFPE</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </Fragment>
    )
}

export default AppLayout
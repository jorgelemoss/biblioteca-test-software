/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function Navbar({ handleLogout }) {

    const { isAuth, user } = useSelector((state) => state.auth)

    return (
        <header className="bg-navbar-bg fixed w-full flex items-center justify-between px-4 py-4 z-50">
            <a href='/' className="text-navbar-brand font-medium text-base uppercase">
                <img src='https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg' className='w-10 h-10' />
            </a>
            {isAuth ? (
                <nav className='flex gap-3 items-center'>
                    <div className='w-8 bg-navbar-profile-image-bg rounded-full'>
                        <img src={user.image} className='w-auto' />
                    </div>
                    <span className='text-navbar-profile-text text-sm'>Olá, <b>{user.name}</b></span>
                    <button onClick={handleLogout} className="bg-navbar-button-bg text-navbar-button-text hover:bg-navbar-button-hover font-medium px-3 py-1.5 rounded-md">Sair</button>
                </nav>
            ) : (
                <nav>
                    <Link to={"/auth/sign-in"}>
                        <button className="bg-navbar-button-bg text-navbar-button-text hover:bg-navbar-button-hover font-medium px-3 py-1.5 rounded-md">Entrar</button>
                    </Link >
                </nav >
            )
            }

        </header >
    )
}

/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function Navbar({ handleLogout }) {

    const { isAuth } = useSelector((state) => state.auth)

    return (
        <header className="bg-navbar-bg flex justify-between px-4 py-2">
            <a href='/' className="text-white font-medium text-lg uppercase">Livraria</a>
            {isAuth ? (
                <nav>
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

import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <header className="bg-navbar-bg flex justify-between px-4 py-2">
            <a href='/' className="text-white font-medium text-lg uppercase">Livraria</a>
            <nav>
                <Link to={"/auth/sign-in"}>
                    <button className="bg-navbar-button-bg text-navbar-button-text hover:bg-navbar-button-hover font-medium px-3 py-1.5 rounded-md">Entrar</button>
                </Link>
            </nav>
        </header>
    )
}

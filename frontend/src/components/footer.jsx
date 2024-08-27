import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="shadow bg-gray-950 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://ingresso.ifpe.edu.br/static/img/ifpe-logo.svg" className="h-14" alt="IFPE Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">IFPE</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <Link to="#" className="hover:underline me-4 md:me-6">Início</Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:underline me-4 md:me-6">FAQ</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">&copy; {`${new Date().getFullYear()}`} <a href="#" className="hover:underline">IFPE</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
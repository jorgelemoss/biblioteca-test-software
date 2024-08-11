import { Home, UserCog, Bookmark, Star, BookCopy, TableOfContents } from 'lucide-react'
import { Link } from 'react-router-dom'

function Dashboard() {

    const Links = [
        {
            key: 0,
            name: "Página Inicial",
            icon: Home,
            link: "#"
        },
        {
            key: 1,
            name: "Minha Conta",
            icon: UserCog,
            link: "#"
        },
        {
            key: 2,
            name: "Favoritos",
            icon: Bookmark,
            link: "#"
        },
        {
            key: 3,
            name: "Lista de Desejos",
            icon: Star,
            link: "#"
        },
        {
            key: 4,
            name: "Novidades",
            icon: BookCopy,
            link: "#"
        },
        {
            key: 5,
            name: "FAQ",
            icon: TableOfContents,
            link: "#"
        }
    ]

    return (
        <section className="flex min-h-screen">
            <aside className="w-24 sm:w-52 px-4 py-4 bg-dashboard-sidebar-bg border-r-4 border-dashboard-sidebar-border">
                <nav className="flex flex-col gap-4 mt-14">
                    {Links.map((links) => (
                        <Link key={links.key} to={links.link} className='bg-dashboard-sidebar-links-bg w-10 sm:w-auto px-1.5 py-2 rounded-sm flex items-center justify-center sm:justify-start gap-2'>
                            <span><links.icon width={20} className='text-dashboard-sidebar-links-icons' /></span>
                            <h1 className="hover:underline hidden sm:block text-sm text-dashboard-sidebar-links-text">{links.name}</h1>
                        </Link>
                    ))}
                </nav>
            </aside>
            <main className="w-full px-4 py-4">
                Content
            </main>
        </section>
    )
}

export default Dashboard
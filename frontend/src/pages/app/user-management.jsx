import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function UserManegment() {

    const { user } = useSelector((state) => state.auth)

    const links = [
        {
            key: 0,
            value: "Criar Usuário",
            link: "/main/user/user-management/create"
        },
        {
            key: 1,
            value: "Deletar Usuário",
            link: "/main/user/user-management/delete"
        },
        {
            key: 2,
            value: "Atualizar Usuário",
            link: "#"
        },
        {
            key: 3,
            value: "Todos os usuários",
            link: "/main/user/user-management/all-users"
        },
    ]

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-center mb-5 text-xl">Olá, {user.name}</h1>

            {links.map((link) => (
                <div key={link.key} className="px-4 py-2 bg-gray-700 mb-4 rounded">
                    <Link className="text-white font-medium" to={`${link.link}`}>{link.value}</Link>
                </div>
            ))}

        </div>
    )
}

export default UserManegment
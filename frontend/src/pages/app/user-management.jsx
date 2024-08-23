import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function UserManegment() {

    const { user } = useSelector((state) => state.auth)

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-center mb-5 text-xl">Olá, {user.name}</h1>

            <div className="px-4 py-2 bg-gray-700 mb-4 rounded">
                <Link className="text-white font-medium" to={"/main/user/user-management/create"}>Criar Usuário</Link>
            </div>
            <div className="px-4 py-2 bg-gray-700 mb-4 rounded">
                <Link className="text-white font-medium" to={"/main/user/user-management/delete"}>Deletar Usuário</Link>
            </div>
            <div className="px-4 py-2 bg-gray-700 rounded">
                <Link className="text-white font-medium" to={"/main/user/user-management/update"}>Atualizar Usuário</Link>
            </div>
        </div>
    )
}

export default UserManegment
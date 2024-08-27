import { useState, useEffect, useCallback } from "react"
import { api } from "../../../api"
import { useParams, Link } from 'react-router-dom'

function UserPage() {

    const [userData, setUserData] = useState()

    const { id } = useParams()

    const handleUser = useCallback((async () => {
        try {
            const { data } = await api.get(`/api/user/${id}`)
            setUserData(data)

        } catch (err) {
            if (err.response.data.status === 400) {
                console.log("Have an error or not have permission to do it!")
            }

        }
    }), [id, setUserData])

    useEffect(() => {
        handleUser()
    }, [handleUser])

    return (
        <div>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium w-72 text-gray-900">Nome</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled value={`${userData?.user.name}`} />
            </div>
            <div className="mb-5">
                <label htmlFor="registration" className="block mb-2 text-sm font-medium w-72 text-gray-900">Matrícula</label>
                <input type="text" id="registration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled value={`${userData?.user.registration}`} />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium w-72 text-gray-900">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled value={`${userData?.user.email}`} />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium w-72 text-gray-900">Senha</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled value="*********" />
            </div>
            <div className='mt-4'>
                <Link to={"/main/user/user-management"}>
                    <button className='w-full px-4 py-2.5 bg-gray-800 rounded-sm text-white font-medium hover:underline' to={"/main/user/user-management"}>Voltar</button>
                </Link>
            </div>
        </div>
    )
}

export default UserPage
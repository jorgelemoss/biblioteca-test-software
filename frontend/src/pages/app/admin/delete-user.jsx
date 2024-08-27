import { LoaderCircle } from "lucide-react"
import { remove } from "@api/index.js"
import { useState } from 'react'

import { enqueueSnackbar } from 'notistack'

function DeleteUser() {

    const [user, setUserData] = useState({
        registration: "",
        email: "",
        title: "",
        description: ""
    })

    const [loading, setLoading] = useState(false)

    const handleRemove = async () => {

        try {

            setLoading(true)

            const { data } = await remove({
                registration: user.registration,
                email: user.email,
                title: user.title,
                description: user.description,
            })

            enqueueSnackbar(`${data.message}`, {
                variant: 'success'
            })

        } catch (err) {
            enqueueSnackbar(`Dados incorretos, tente novamente.`, {
                variant: 'error'
            })

            console.log(err.response.data)


        } finally {
            setLoading(false)
            setUserData({
                email: "",
                registration: "",
                title: "",
                description: ""
            })

        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-5">
                <label htmlFor="registration" className="block mb-2 text-sm font-medium w-72 text-gray-900">Matrícula</label>
                <input type="text" id="registration" value={user.registration} onChange={(e) => setUserData({ ...user, registration: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20242ADSPL0000" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium w-72 text-gray-900">E-mail do(a) estudante</label>
                <input type="email" id="email" value={user.email} onChange={(e) => setUserData({ ...user, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@discente.ifpe.edu.br" />
            </div>
            <div className="mb-5">
                <label htmlFor="title" className="block text-sm mb-2 font-medium w-72 text-gray-900">Motivo</label>
                <input type="text" minLength={8} maxLength={36} id="title" value={user.title} onChange={(e) => setUserData({ ...user, title: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Matrícula fechada..." />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Descreva</label>
                <textarea id="description" minLength={14} maxLength={70} value={user.description} onChange={(e) => setUserData({ ...user, description: e.target.value })} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: O aluno finalizou o curso..."></textarea>
            </div>


            {loading ? (
                <button disabled className="w-full flex justify-center bg-gray-600 hover:bg-gray-700 px-4 py-2 text-white font-semibold rounded"><LoaderCircle className='animate-spin-slow' /></button>
            ) : (
                <button onClick={handleRemove} className="w-full bg-gray-600 hover:bg-gray-700 px-4 py-2 text-white font-semibold rounded">Deletar Usuário</button>
            )}

        </div>
    )
}

export default DeleteUser
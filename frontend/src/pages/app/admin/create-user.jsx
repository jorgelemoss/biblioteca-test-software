import { LoaderCircle } from "lucide-react"
import { register } from "@api/index.js"
import { useState } from 'react'

import { enqueueSnackbar } from 'notistack'

function CreateUser() {

    const [user, setUserData] = useState({
        name: "",
        email: "",
        registration: "",
        password: "",
        confirmPassword: "",
    })

    const [loading, setLoading] = useState(false)


    const handleRemove = async () => {

        try {

            setLoading(true)

            if (user.password != user.confirmPassword) {
                enqueueSnackbar(`Senhas não coincidem`, {
                    variant: 'error'
                })

                throw new Error()
            }

            const { data } = await register({
                name: user.name,
                email: user.email,
                registration: user.registration,
                password: user.password,
            })

            enqueueSnackbar(`${data.message}`, {
                variant: 'success'
            })

        } catch (err) {
            enqueueSnackbar(`Houve um problema.`, {
                variant: 'error'
            })

            if (err.message) {
                enqueueSnackbar(`${err.message}`, {
                    variant: 'error'
                })
            }


        } finally {
            setLoading(false)
            setUserData({
                name: "",
                email: "",
                registration: "",
                password: "",
                confirmPassword: "",
            })

        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium w-72 text-gray-900">Nome</label>
                <input type="text" id="name" value={user.name} onChange={(e) => setUserData({ ...user, name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20242ADSPL0000" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium w-72 text-gray-900">E-mail do(a) estudante</label>
                <input type="email" id="email" value={user.email} onChange={(e) => setUserData({ ...user, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@discente.ifpe.edu.br" />
            </div>
            <div className="mb-5">
                <label htmlFor="registration" className="block mb-2 text-sm font-medium w-72 text-gray-900">Matrícula</label>
                <input type="text" id="registration" value={user.registration} onChange={(e) => setUserData({ ...user, registration: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20242ADSPL0000" />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium w-72 text-gray-900">Senha do estudante</label>
                <input type="password" id="password" value={user.password} onChange={(e) => setUserData({ ...user, password: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
            </div>
            <div className="mb-5">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium w-72 text-gray-900">Confirmar senha</label>
                <input type="password" id="confirmPassword" value={user.confirmPassword} onChange={(e) => setUserData({ ...user, confirmPassword: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" />
            </div>




            {loading ? (
                <button disabled className="w-full flex justify-center bg-gray-600 hover:bg-gray-700 px-4 py-2 text-white font-semibold rounded"><LoaderCircle className='animate-spin-slow' /></button>
            ) : (
                <button onClick={handleRemove} className="w-full bg-gray-600 hover:bg-gray-700 px-4 py-2 text-white font-semibold rounded">Criar usuário</button>
            )}

        </div>
    )
}

export default CreateUser
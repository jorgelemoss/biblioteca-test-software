/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux'
import { Link, useNavigate, Outlet } from 'react-router-dom'

const TableRoot = ({ children }) => (
    <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            {children}
        </table>
    </div>
)

const TableHeader = ({ children }) => (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        {children}
    </thead>
)

const TableBody = ({ children }) => (
    <tbody>
        {children}
    </tbody>
)


function AllUsers() {

    const { users } = useSelector((state) => state.getAll)

    const current_path = location.pathname === "/main/user/user-management/all-users" || location.pathname === "/main/user/user-management/all-users/"

    const navigate = useNavigate()

    return (
        <div>
            {current_path ? (
                <>
                    <TableRoot>
                        <TableHeader>
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Matrícula
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ação
                                </th>
                            </tr>
                        </TableHeader>
                        <TableBody>
                            {users?.map((user) => {
                                return (
                                    <tr key={user} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user.registration}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => navigate(`/main/user/user-management/all-users/user/${user.id}`)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </TableBody>
                    </TableRoot>
                    <div className='mt-4'>
                        <Link className='px-4 py-2.5 bg-gray-800 rounded-sm text-white font-medium hover:underline' to={"/main/user/user-management"}>Voltar</Link>
                    </div>
                </>
            ) : (
                <Outlet />
            )}

        </div>
    )
}

export default AllUsers
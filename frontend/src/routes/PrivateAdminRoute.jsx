/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const PrivateAdminRoute = ({ children }) => {

    const { user } = useSelector((state) => state.auth)

    const location = useLocation()

    const current_path = location.pathname === "/main/user/user-management" || location.pathname === "/main/user/user-management/"

    return (
        <>
            {user.role === "Admin" ? (
                <>
                    {current_path ? children : (
                        <Outlet />
                    )}
                </>
            ) : <Navigate to={"/main/user/"} replace={true} />}
        </>
    )
}

export default PrivateAdminRoute
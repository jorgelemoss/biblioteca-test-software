/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const GuestRoute = ({ children }) => {
    const { isAuth } = useSelector((state) => state.auth)
    return isAuth ? <Navigate to={"/main/user"} /> : <>{children}</>
}
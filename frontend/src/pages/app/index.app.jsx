import MyAccount from './myaccount'
import UserManegment from './user-management'
import DeleteUser from './admin/delete-user'
import CreateUser from './admin/create-user'
import AllUsers from './admin/all-users'
import UserPage from './admin/user-page'

export const AdminScreens = {
    AdminDelete: DeleteUser,
    AdminCreate: CreateUser,
    AdminAllUsers: AllUsers,
    AdminUserPage: UserPage
}

export const AppScreens = {
    AppMyAccount: MyAccount,
    AppUserManagement: UserManegment,

}
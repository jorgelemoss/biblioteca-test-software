import MyAccount from './myaccount'
import Favorites from './favorites'
import Recents from './recents'
import WishList from './wish-list'
import UserManegment from './user-management'
import Faq from './faq'
import DeleteUser from './admin/delete-user'



export const AdminScreens = {
    AdminDelete: DeleteUser
}

export const AppScreens = {
    AppMyAccount: MyAccount,
    AppFavorites: Favorites,
    AppRecents: Recents,
    AppWishList: WishList,
    AppUserManagement: UserManegment,
    AppFaq: Faq
}
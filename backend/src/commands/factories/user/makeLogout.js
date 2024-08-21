import LogoutCommand from '../../user/logout.command.js'
import UserPrismaRepository from '../../../repositories/prisma/UserPrismaRepository.js'

export default function MakeLogout() {
    const userPrismaRepository = new UserPrismaRepository()
    const logoutCommand = new LogoutCommand(userPrismaRepository)

    return logoutCommand
} 

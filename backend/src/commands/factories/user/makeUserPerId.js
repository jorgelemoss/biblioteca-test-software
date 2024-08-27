import UserPrismaRepository from '../../../repositories/prisma/UserPrismaRepository.js'
import PerIdCommand from '../../user/user-per-id.command.js'

export default function MakeUserPerId() {
    const userPrismaRepository = new UserPrismaRepository()
    const perIdCommand = new PerIdCommand(userPrismaRepository)

    return perIdCommand
}
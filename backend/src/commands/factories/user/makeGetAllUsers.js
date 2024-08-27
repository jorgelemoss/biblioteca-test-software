import UserPrismaRepository from "../../../repositories/prisma/UserPrismaRepository.js";
import AllUsersCommand from "../../all-users.command.js";

export default function MakeGetAllUsers() {
    const userRepository = new UserPrismaRepository()
    const allUsersCommand = new AllUsersCommand(userRepository)

    return allUsersCommand
}
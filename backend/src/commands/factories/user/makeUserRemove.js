import UserPrismaRepository from "../../../repositories/prisma/UserPrismaRepository.js";
import UserRemoveCommand from "../../user/remove.command.js";

export default function MakeUserRemove() {
    const userRepository = new UserPrismaRepository()
    const userRemoveCommand = new UserRemoveCommand(userRepository)

    return userRemoveCommand
}
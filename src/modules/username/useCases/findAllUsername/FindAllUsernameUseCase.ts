import { prisma } from "../../../../database/prismaClient";

export class FindAllUsernameUseCase {
   async execute() {
      const usernames = await prisma.username.findMany({
         select: {
            id: true,
            username: true,
         },
      })
      return usernames;
   }
}
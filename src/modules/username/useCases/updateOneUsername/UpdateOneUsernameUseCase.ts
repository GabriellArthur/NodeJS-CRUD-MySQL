import { prisma } from "../../../../database/prismaClient";

interface IUpdateUsername {
   id: string;
   username: string;
}

export class UpdateAllUsernameUseCase {
   async execute({ id, username }: IUpdateUsername) {
      const usernameUpdate = await prisma.username.update({
         where: {
            id
         },
         data: {
            username
         },
         select: {
            id: true,
            username: true,
         },
      })
      return usernameUpdate;
   }
}
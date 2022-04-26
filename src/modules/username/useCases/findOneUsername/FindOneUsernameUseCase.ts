import { prisma } from "../../../../database/prismaClient";

interface IFindUsername {
   id: string;
}

export class FindOneUsernameUseCase {
   async execute({ id }: IFindUsername) {
      const username = await prisma.username.findMany({
         where: {
            id: id
         },
         select: {
            id: true,
            username: true,
         },
      })
      return username;
   }
}
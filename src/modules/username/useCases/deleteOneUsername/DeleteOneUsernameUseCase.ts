import { prisma } from "../../../../database/prismaClient";

interface IDeleteUsername {
   id: string;
}

export class DeleteOneUsernameUseCase {
   async execute({ id }: IDeleteUsername) {
      const usernameDelete = await prisma.username.delete({
         where: {
            id
         },
         select: {
            id: true,
            username: true,
         },
      })
      return usernameDelete;
   }
}
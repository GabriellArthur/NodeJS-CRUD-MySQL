import { prisma } from "../../../../database/prismaClient";

interface ICreateUsername {
   username: string;
   password: string
}

export class CreateUsernameUseCase {
   async execute({ password, username }: ICreateUsername) {
      //Validar se o usuário existe retorna um erro
      const usernameExists = await prisma.username.findFirst({
         where: { username: { equals: username } }
      })
      if (usernameExists) {
         throw new Error("Username already exists")
      }
      //Criptografar a senha
      //Salvar o Username
      const usernameAdd = await prisma.username.create({
         data: {
            username,
            password,
         }
      })

      return usernameAdd;
   }
}
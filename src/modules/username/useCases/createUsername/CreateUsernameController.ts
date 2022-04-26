import { Request, Response } from "express";
import { CreateUsernameUseCase } from "./CreateUsernameUseCase";

export class CreateUsernameController {
   async handle(request: Request, response: Response) {
      const { username, password } = request.body
      const createUsernameUseCase = new CreateUsernameUseCase();
      const result = await createUsernameUseCase.execute({
         username,
         password
      })
      return response.json(result);
   }
}
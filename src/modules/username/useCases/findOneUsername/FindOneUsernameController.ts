import { Request, Response } from "express";
import { FindOneUsernameUseCase } from "./findOneUsernameUseCase";


export class FindOneUsernameController {
   async handle(request: Request, response: Response) {
      const { id } = request.params
      const findOneUsernameUseCase = new FindOneUsernameUseCase()
      const username = await findOneUsernameUseCase.execute({ id })
      return response.json(username)
   }
}
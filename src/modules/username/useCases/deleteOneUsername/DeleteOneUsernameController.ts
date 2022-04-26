import { Request, Response } from "express";
import { DeleteOneUsernameUseCase } from "./DeleteOneUsernameUseCase";


export class DeleteOneUsernameController {
   async handle(request: Request, response: Response) {
      const { id } = request.params
      const deleteOneUsernameUseCase = new DeleteOneUsernameUseCase()
      const usernameDelete = await deleteOneUsernameUseCase.execute({ id })
      return response.json(usernameDelete)
   }
}
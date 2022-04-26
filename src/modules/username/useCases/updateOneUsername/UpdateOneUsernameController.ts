import { Request, Response } from "express";
import { UpdateAllUsernameUseCase } from "./UpdateOneUsernameUseCase";


export class UpdateAllUsernameController {
   async handle(request: Request, response: Response) {
      const { id } = request.params
      const { username } = request.body
      const updateAllUsernameUseCase = new UpdateAllUsernameUseCase()
      const usernameUpdate = await updateAllUsernameUseCase.execute({ id, username })
      return response.json(usernameUpdate)
   }
}
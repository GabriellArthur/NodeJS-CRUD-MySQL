import { Request, Response } from "express";
import { FindAllUsernameUseCase } from "./FindAllUsernameUseCase";


export class FindAllUsernameController {
   async handle(request: Request, response: Response) {
      const findAllUsernameUseCase = new FindAllUsernameUseCase()
      const allUsername = await findAllUsernameUseCase.execute()
      return response.json(allUsername)
   }
}
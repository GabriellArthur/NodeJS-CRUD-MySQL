import { Router } from "express";
import { CreateUsernameController } from "./modules/username/useCases/createUsername/CreateUsernameController";
import { DeleteOneUsernameController } from "./modules/username/useCases/deleteOneUsername/DeleteOneUsernameController";
import { FindAllUsernameController } from "./modules/username/useCases/findAllUsername/FindAllUsernameController";
import { FindOneUsernameController } from "./modules/username/useCases/findOneUsername/FindOneUsernameController";
import { UpdateAllUsernameController } from "./modules/username/useCases/updateOneUsername/UpdateOneUsernameController";

const routes = Router()

const createUsernameController = new CreateUsernameController();
const findAllUsernameController = new FindAllUsernameController();
const findOneUsernameController = new FindOneUsernameController();
const updateAllUsernameController = new UpdateAllUsernameController();
const deleteOneUsernameController = new DeleteOneUsernameController();

//CREATE
routes.post('/username/', createUsernameController.handle)
//READ
routes.get('/username/', findAllUsernameController.handle)
routes.get('/username/:id', findOneUsernameController.handle)
//UPDATE
routes.put('/username/:id', updateAllUsernameController.handle)
//DELETE
routes.delete('/username/:id', deleteOneUsernameController.handle)

export { routes }
import { Router, Request, Response } from 'express';
import { adaptRoute } from './_infra/adapters/ExpressRouterAdapter';
import { CreateUserController } from './_useCases/CreateUser/CreateUserController';
import { CreateUserUseCase } from './_useCases/CreateUser/CreateUserUseCase';
import { UserCreateRequest, UserCreateResponse } from './_useCases/CreateUser/CreateUserDTO';

const router = Router();
// create IUserRepository
const createUserUC = new CreateUserUseCase(null);
const userController = new CreateUserController(createUserUC);

router.post('/users', adaptRoute<UserCreateRequest,UserCreateResponse>(userController));

export { router }
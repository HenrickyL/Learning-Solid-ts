import { IUseCase } from "../../_infra/IUseCase";
import { UserCreateRequest, UserCreateResponse } from "./CreateUserDTO";
import { IUserRepository } from '../../repositories/IUserRepository';
import { BadRequestException } from "../../_infra/Exceptions";
import { User } from "../../entities/User";

export class CreateUserUseCase implements IUseCase<UserCreateRequest, UserCreateResponse>{

    constructor(
        private repository : IUserRepository
    ){}

    async execute(request: UserCreateRequest) : Promise<UserCreateResponse>{
        const userAlreadyExists = await this.repository.findByEmailAsync(request.email);
        if(userAlreadyExists){
            throw new BadRequestException(`User ${request.email} already exists.`);
        }

        const user = new User(request);
        await this.repository.saveAsync(user);
        return {
            name: user.name,
            email: user.email
        }
    }

}
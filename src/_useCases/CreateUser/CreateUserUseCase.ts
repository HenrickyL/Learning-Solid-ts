import { IUseCase } from "../../_infra/IUseCase";
import { UserCreateRequest, UserCreateResponse } from "./CreateUserDTO";
import { IUserRepository } from '../../repositories/IUserRepository';
import { BadRequestException } from "../../_infra/Exceptions";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase implements IUseCase<UserCreateRequest, UserCreateResponse>{

    constructor(
        private repository : IUserRepository,
        private mailProvider : IMailProvider
    ){}

    async execute(request: UserCreateRequest) : Promise<UserCreateResponse>{
        const userAlreadyExists = await this.repository.findByEmailAsync(request.email);
        if(userAlreadyExists){
            throw new BadRequestException(`User ${request.email} already exists.`);
        }

        const user = new User(request);
        await this.repository.saveAsync(user);

        // await this.mailProvider.sendMailAsync({
        //     to: {
        //         name: user.name,
        //         email: user.email
        //     },
        //     from: {
        //         name: 'John Doe',
        //         email: 'pXUeh@example.com'
        //     },	
        //     subject: 'Email Confirmation',
        //     body: '<p>Wellcome</p>'
        // });


        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }

}
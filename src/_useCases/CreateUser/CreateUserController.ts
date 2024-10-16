import { Created, HttpResponse } from "../../_infra/HttpResponses";
import { IController } from "../../_infra/IController";
import { UserCreateRequest, UserCreateResponse } from "./CreateUserDTO";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController implements IController<UserCreateRequest, UserCreateResponse>{
    constructor(
        private useCase : CreateUserUseCase
    ){}
    async handleAsync(request: UserCreateRequest): Promise<HttpResponse<UserCreateResponse>>{
        request = this.formatData(request)
        const result = await this.useCase.execute(request)
        return Created<UserCreateResponse>(result)
    }

    formatData(request: UserCreateRequest): UserCreateRequest{
        return request;
    }
}
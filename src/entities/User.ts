import { IEntity } from "../_infra/IEntity";

export interface IUser{
    name: string
    email: string
    password: string
}

export class User extends IEntity{
    public name: string
    public email: string
    public password: string

    constructor(user:IUser, id?:string){
        super(id)
        this.name = user.name
        this.email = user.email
        this.password = user.password
    }
}



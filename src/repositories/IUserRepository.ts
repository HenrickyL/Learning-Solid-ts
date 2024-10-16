import { User } from "../entities/User";

export interface IUserRepository{
    findByEmailAsync(email: string): Promise<User>
    saveAsync(user: User): Promise<void>
}
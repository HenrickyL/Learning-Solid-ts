import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository{
    private users: User[] = [];

    async findByEmailAsync(email: string): Promise<User> {
        return this.users.find((user) => user.email.toLocaleLowerCase() === email.toLocaleLowerCase());
    }

    async saveAsync(user: User): Promise<void> {
        this.users.push(user);
    }

}
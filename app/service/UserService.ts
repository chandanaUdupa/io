import {User} from "../domain/User";
/**
 * Created by Konrad on 2017-01-27.
 */
export class UserService {
    private static _users: Array<User> = [new User('admin', 'admin'), new User('user', 'user')];

    public static getById(id: number): User {
        for (let user of UserService._users) {
            if(user.id == id) {
                return user;
            }
        }
        return null;
    }

    public static getByUsername(username: string): User {
        for (let user of UserService._users) {
            if(user.username == username) {
                return user;
            }
        }
    }

    public static deleteById(id: number): void {
        let index:number = 0;
        for (let user of UserService._users) {
            if(user.id == id) {
                UserService._users.splice(index, 1);
            }
            index++;
        }
    }

    public static addUser(user: User): User {
        UserService._users.push(user);
        return user;
    }

    static get users(): Array<User> {
        return this._users;
    }
}
import {User} from "./User";
/**
 * Created by Konrad on 2017-01-28.
 */
export class Reservation {
    private static _nextId:number = 1;
    private _id:number;
    private _user:User;
    private _date:Date;

    constructor(user: User, date: Date) {
        this._id = Reservation._nextId++;
        this._user = user;
        this._date = date;
    }

    static get nextId(): number {
        return this._nextId;
    }

    get id(): number {
        return this._id;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }
}
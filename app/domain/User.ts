/**
 * Created by Konrad on 2017-01-27.
 */
export class User {
    private static _nextId:number = 1;
    private _id:number;
    private _username:string;
    private _password:string;


    constructor(username: string, password: string) {
        this._id = User._nextId++;
        this._username = username;
        this._password = password;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }


    static get nextId(): number {
        return this._nextId;
    }

    static set nextId(value: number) {
        this._nextId = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
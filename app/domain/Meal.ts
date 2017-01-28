/**
 * Created by Konrad on 2017-01-28.
 */
export class Meal {
    private static _nextId:number = 1;
    private _id:number;
    private _name:string;
    private _price:number;

    constructor(name: string, price: number) {
        this._id = Meal._nextId++;
        this._name = name;
        this._price = price;
    }

    static get nextId(): number {
        return this._nextId;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
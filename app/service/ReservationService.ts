/**
 * Created by Konrad on 2017-01-28.
 */
import {Reservation} from "../domain/Reservation";
import {UserService} from "./UserService";
/**
 * Created by Konrad on 2017-01-27.
 */
export class ReservationService {
    private static _reservations: Array<Reservation> = [new Reservation(UserService.getById(1), new Date())];
    public static _tables: Array<Number> = [1,2,3,4,5,6,7,8,9,10];

    public static getById(id: number): Reservation {
        for (let reservation of ReservationService._reservations) {
            if(reservation.id == id) {
                return reservation;
            }
        }
        return null;
    }

    public static deleteById(id: number): void {
        let index:number = 0;
        for (let reservation of ReservationService._reservations) {
            if(reservation.id == id) {
                ReservationService._reservations.splice(index, 1);
            }
            index++;
        }
    }

    public static addReservation(reservation: Reservation): Reservation {
        ReservationService._reservations.push(reservation);
        return reservation;
    }

    static get reservations(): Array<Reservation> {
        return this._reservations;
    }
}

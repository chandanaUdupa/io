import {Injectable} from '@angular/core';
import { Http ,Headers, RequestOptions } from '@angular/http';
import { userInterface } from './user.interface';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthorService{
    user: userInterface;

    loginUrl = 'http://127.0.0.1:8080/api/users/login'

    constructor (private http: Http) {

    }

    postLogin (user: userInterface) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, headers, options)
            .map(res => res.json());
    }

}
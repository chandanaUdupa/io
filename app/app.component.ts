import {Component} from '@angular/core';
import { userInterface } from './user.interface';
import {Headers, Http} from "@angular/http";
import {User} from "./domain/User";
import {UserService} from "./service/UserService";

@Component({
    selector: 'my-app',
    template: `
    <login-page *ngIf="loginPage"></login-page>
    <main-page *ngIf="mainPage"></main-page>     `

})
export class AppComponent {
    user: User = new User('', '');
    private loginPage: boolean;
    private mainPage: boolean;

    constructor () {
    this.loginPage = true;
    this.mainPage = false;
    }





    postLogin() {
        let foundUser = UserService.getByUsername(this.user.username)
        console.log(this.user);
        if(foundUser == null) {
            console.log("Nie znaleziono usera");
            return;
        }
        if(this.user.password == foundUser.password) {
            console.log("OK");
            this.loginPage = false;
            this.mainPage = true;
            return;

        } else {
            console.log("zle haslo");
            return;
        }
    }

    getUsers() {
        return UserService.users;
    }
}

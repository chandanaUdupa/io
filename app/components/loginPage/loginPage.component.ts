import {Component, Input, Output} from '@angular/core';
import {UserService} from "../../service/UserService";
import {User} from "../../domain/User";

@Component({
    selector: 'login-page',
    templateUrl: 'app/components/loginPage/loginPage.template.html',
})

export class LoginPageComponent {

    user: User = new User('', '');

    @Output() loginPage: boolean;
    @Output() mainPage: boolean;

    @Input() postLogin() {
        let foundUser = UserService.getByUsername(this.user.username)
        console.log(this.user);
        if (foundUser == null) {
            console.log("Nie znaleziono usera");
            return;
        }
        if (this.user.password == foundUser.password) {
            console.log("OK");
            this.loginPage = false;
            this.mainPage = true;
            return;

        } else {
            console.log("zle haslo");
            return;
        }
    }

}
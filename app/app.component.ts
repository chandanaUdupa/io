import {Component} from '@angular/core';
import { userInterface } from './user.interface';
import {Headers, Http} from "@angular/http";
import {User} from "./domain/User";
import {UserService} from "./service/UserService";

@Component({
    selector: 'my-app',
    template: `
         <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input [(ngModel)]="user.username" name="login" type="text" placeholder="username"/>
      <input [(ngModel)]="user.password" name="password" type="password" placeholder="password"/>
      <button (click)="postLogin()">login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>`
})
export class AppComponent {
    user: User = new User('', '');

    constructor () {
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
            return;
        } else {
            console.log("zle haslo");
            return;
        }
    }
}

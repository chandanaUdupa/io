"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var User_1 = require("./domain/User");
var UserService_1 = require("./service/UserService");
var AppComponent = (function () {
    function AppComponent() {
        this.user = new User_1.User('', '');
    }
    AppComponent.prototype.postLogin = function () {
        var foundUser = UserService_1.UserService.getByUsername(this.user.username);
        console.log(this.user);
        if (foundUser == null) {
            console.log("Nie znaleziono usera");
            return;
        }
        if (this.user.password == foundUser.password) {
            console.log("OK");
            return;
        }
        else {
            console.log("zle haslo");
            return;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n         <div class=\"login-page\">\n  <div class=\"form\">\n    <form class=\"register-form\">\n      <input type=\"text\" placeholder=\"name\" />\n      <input type=\"password\" placeholder=\"password\" />\n      <input type=\"text\" placeholder=\"email address\"/>\n      <button>create</button>\n      <p class=\"message\">Already registered? <a href=\"#\">Sign In</a></p>\n    </form>\n    <form class=\"login-form\">\n      <input [(ngModel)]=\"user.username\" name=\"login\" type=\"text\" placeholder=\"username\"/>\n      <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" placeholder=\"password\"/>\n      <button (click)=\"postLogin()\">login</button>\n      <p class=\"message\">Not registered? <a href=\"#\">Create an account</a></p>\n    </form>\n  </div>\n</div>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
var User_1 = require("../domain/User");
/**
 * Created by Konrad on 2017-01-27.
 */
var UserService = (function () {
    function UserService() {
    }
    UserService.getById = function (id) {
        for (var _i = 0, _a = UserService._users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id == id) {
                return user;
            }
        }
        return null;
    };
    UserService.getByUsername = function (username) {
        console.log(UserService._users);
        for (var _i = 0, _a = UserService._users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username == username) {
                return user;
            }
        }
        //return null;
    };
    UserService.deleteById = function (id) {
        var index = 0;
        for (var _i = 0, _a = UserService._users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id == id) {
                UserService._users.splice(index, 1);
            }
            index++;
        }
    };
    Object.defineProperty(UserService, "users", {
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService._users = [new User_1.User('admin', 'admin'), new User_1.User('user', 'user')];
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map
"use strict";
/**
 * Created by Konrad on 2017-01-27.
 */
var User = (function () {
    function User(username, password) {
        this._id = User._nextId++;
        this._username = username;
        this._password = password;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User, "nextId", {
        get: function () {
            return this._nextId;
        },
        set: function (value) {
            this._nextId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
User._nextId = 1;
exports.User = User;
//# sourceMappingURL=User.js.map
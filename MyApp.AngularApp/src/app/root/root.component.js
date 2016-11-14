"use strict";
var auth_service_1 = require('../auth/auth.service');
var AppController = (function () {
    function AppController(authService) {
        this.authService = authService;
        this.title = 'Todo App';
    }
    AppController.prototype.login = function () {
        this.authService.startSigninMainWindow();
    };
    AppController.prototype.loginCallback = function () {
        this.authService.endSigninMainWindow();
    };
    AppController.prototype.logout = function () {
        this.authService.startSignoutMainWindow();
    };
    AppController.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    AppController.$inject = [auth_service_1.AuthService.iid];
    return AppController;
}());
exports.AppController = AppController;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    controller: AppController,
    template: "<div class=\"container\">\n    <div class=\"row\">\n        <h1>{{$ctrl.title}}</h1>\n        <a ng-if=\"!$ctrl.isAuthenticated()\" ng-click=\"$ctrl.login()\">Log in</a>\n        <a ng-if=\"$ctrl.isAuthenticated()\" ng-click=\"$ctrl.logout()\">Log out</a>\n  \n        <br/>\n        <div ui-view></div>\n    </div>\n</div>"
};
//# sourceMappingURL=root.component.js.map
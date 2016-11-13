"use strict";
routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('app', {
        abstract: true,
        template: '<div ui-view></div>'
    })
        .state('app.home', {
        url: '/home',
        template: '<app-home></app-home>'
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeConfig;
//# sourceMappingURL=routes.config.js.map
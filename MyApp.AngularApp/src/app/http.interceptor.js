"use strict";
var auth_service_1 = require('./auth/auth.service');
configInterceptor.$inject = ['$httpProvider'];
function configInterceptor($httpProvider) {
    $httpProvider.interceptors.push(httpInterceptor);
    httpInterceptor.$inject = ['$q', '$injector'];
    function httpInterceptor($q, $injector) {
        return {
            'request': onRequest
        };
        function onRequest(config) {
            var authService = $injector.get(auth_service_1.AuthService.iid);
            if (authService.isAuthenticated()) {
                config.headers.Authorization = authService.getToken();
            }
            return config;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configInterceptor;
//# sourceMappingURL=http.interceptor.js.map
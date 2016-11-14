"use strict";
var angular = require('angular');
var router = require('angular-ui-router');
var auth_service_1 = require('./auth/auth.service');
var root_1 = require('./root');
var routes_config_1 = require('./routes.config');
var http_interceptor_1 = require('./http.interceptor');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('app', [
    router,
    root_1.default.name
])
    .service(auth_service_1.AuthService.iid, auth_service_1.AuthService)
    .config(routes_config_1.default)
    .config(http_interceptor_1.default);
//# sourceMappingURL=index.js.map
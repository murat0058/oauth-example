"use strict";
var angular = require('angular');
var router = require('angular-ui-router');
var root_1 = require('./root');
var routes_config_1 = require('./routes.config');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('app', [
    router,
    root_1.default.name
])
    .config(routes_config_1.default);
//# sourceMappingURL=index.js.map
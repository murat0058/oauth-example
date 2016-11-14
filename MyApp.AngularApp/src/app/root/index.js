"use strict";
var angular = require('angular');
var root_component_1 = require('./root.component');
var home_1 = require('./home');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('app.root', [
    home_1.default.name
])
    .component('appRoot', root_component_1.default);
//# sourceMappingURL=index.js.map
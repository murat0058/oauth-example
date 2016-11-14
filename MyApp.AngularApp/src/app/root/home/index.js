"use strict";
var angular = require('angular');
var home_component_1 = require('./home.component');
var todo_service_1 = require('../todo.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('app.root.home', [])
    .service(todo_service_1.TodoService.iid, todo_service_1.TodoService)
    .component('appHome', home_component_1.default);
//# sourceMappingURL=index.js.map
"use strict";
var angular = require('angular');
var root_component_1 = require('./root.component');
var todo_service_1 = require('./todo.service');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('app.root', [])
    .component('appRoot', root_component_1.default)
    .service(todo_service_1.TodoService.iid, todo_service_1.TodoService);
//# sourceMappingURL=index.js.map
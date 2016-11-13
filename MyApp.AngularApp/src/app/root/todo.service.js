"use strict";
var TodoService = (function () {
    function TodoService($http) {
        this.$http = $http;
    }
    TodoService.prototype.getTodoItems = function () {
        return this.$http.get('http://localhost:12158/api/todos')
            .then(function (result) { return result.data; });
    };
    TodoService.prototype.addTodoItem = function (title) {
        return this.$http.post('http://localhost:12158/api/todos', { title: title });
    };
    TodoService.iid = 'TodoService';
    TodoService.$inject = ['$http'];
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map
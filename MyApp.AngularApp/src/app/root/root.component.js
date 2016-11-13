"use strict";
var todo_service_1 = require('./todo.service');
var AppController = (function () {
    function AppController(todoService) {
        this.todoService = todoService;
        this.title = 'Todo App';
    }
    AppController.prototype.$onInit = function () {
        this.getTodoItems();
    };
    AppController.prototype.getTodoItems = function () {
        var _this = this;
        this.todoService.getTodoItems()
            .then(function (data) {
            _this.todoItems = data;
        });
    };
    AppController.$inject = [todo_service_1.TodoService.iid];
    return AppController;
}());
exports.AppController = AppController;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    controller: AppController,
    template: "<div class=\"container\">\n    <div class=\"row\">\n        <h1>{{$ctrl.title}}</h1>\n        <br/>\n        <table class=\"table table-bordered\">\n            <tr>\n                <th>Title</th>\n                <th>Completed?</th>\n            </tr>\n            <tr ng-repeat=\"item in $ctrl.todoItems\">\n                <td>{{item.title}}</td>\n                <td><i ng-show=\"item.isCompleted\" class=\"glyphicon glyphicon-ok\"></i></td>\n            </tr>\n        </table>\n    </div>\n</div>"
};
//# sourceMappingURL=root.component.js.map
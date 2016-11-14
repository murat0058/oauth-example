"use strict";
var todo_service_1 = require('../todo.service');
var HomeController = (function () {
    function HomeController($rootScope, todoService) {
        this.$rootScope = $rootScope;
        this.todoService = todoService;
    }
    HomeController.prototype.$onInit = function () {
        var _this = this;
        this.$rootScope.$watch(function () { return _this.parent.isAuthenticated(); }, function () {
            _this.todoService.getTodoItems().then(function (items) {
                _this.todoItems = items;
            }, function () {
                _this.todoItems = undefined;
            });
        });
    };
    HomeController.$inject = ['$rootScope', todo_service_1.TodoService.iid];
    return HomeController;
}());
exports.HomeController = HomeController;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    controller: HomeController,
    template: "\n        <table class=\"table table-bordered\">\n            <tr>\n                <th>Title</th>\n                <th>Completed?</th>\n            </tr>\n            <tr ng-repeat=\"item in $ctrl.todoItems\">\n                <td>{{item.title}}</td>\n                <td><i ng-show=\"item.isCompleted\" class=\"glyphicon glyphicon-ok\"></i></td>\n            </tr>\n        </table>",
    require: {
        parent: '^appRoot'
    }
};
//# sourceMappingURL=home.component.js.map
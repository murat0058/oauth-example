import { TodoService } from '../todo.service';
import { AppController } from '../root.component';

export class HomeController {
    todoItems: any;
    parent: AppController;

    static $inject = ['$rootScope', TodoService.iid];
    constructor(private $rootScope: ng.IRootScopeService, private todoService: TodoService) { }

    $onInit() {
        this.$rootScope.$watch(() => this.parent.isAuthenticated(), () => {
            this.todoService.getTodoItems().then((items) => {
                this.todoItems = items;
            },
                () => {
                    this.todoItems = undefined;
                });
        });
    }
}

export default {
    controller: HomeController,
    template: `
        <table class="table table-bordered">
            <tr>
                <th>Title</th>
                <th>Completed?</th>
            </tr>
            <tr ng-repeat="item in $ctrl.todoItems">
                <td>{{item.title}}</td>
                <td><i ng-show="item.isCompleted" class="glyphicon glyphicon-ok"></i></td>
            </tr>
        </table>`,
    require: {
        parent: '^appRoot'
    }
};

import {TodoService} from './todo.service';

export class AppController {
    private title = 'Todo App';
    private todoItems: any;
    
    static $inject = [TodoService.iid];
    constructor(private todoService: TodoService) { }

    $onInit() {
        this.getTodoItems();
    }

    getTodoItems() {
        this.todoService.getTodoItems()
            .then((data) => {
                this.todoItems = data;
            });
    }
}

export default {
    controller: AppController,
    template: `<div class="container">
    <div class="row">
        <h1>{{$ctrl.title}}</h1>
        <br/>
        <table class="table table-bordered">
            <tr>
                <th>Title</th>
                <th>Completed?</th>
            </tr>
            <tr ng-repeat="item in $ctrl.todoItems">
                <td>{{item.title}}</td>
                <td><i ng-show="item.isCompleted" class="glyphicon glyphicon-ok"></i></td>
            </tr>
        </table>
    </div>
</div>`
};

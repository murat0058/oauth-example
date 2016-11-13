import * as angular from 'angular';
import appRoot from './root.component';
import {TodoService} from './todo.service';

export default angular.module('app.root', [])
    .component('appRoot', appRoot)
    .service(TodoService.iid, TodoService)
    ;

import * as angular from 'angular';
import homeComponent from './home.component';
import { TodoService } from '../todo.service';

export default angular.module('app.root.home', [])
    .service(TodoService.iid, TodoService)
    .component('appHome', homeComponent)
    ;

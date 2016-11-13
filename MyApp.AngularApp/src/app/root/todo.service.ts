
export class TodoService {
    static iid: string = 'TodoService';
    static $inject = ['$http'];

    constructor(private $http: ng.IHttpService) { }

    getTodoItems() {
        return this.$http.get('http://localhost:12158/api/todos')
            .then(result => result.data);
    }

    addTodoItem(title: string) {
        return this.$http.post('http://localhost:12158/api/todos', { title: title });
    }
}

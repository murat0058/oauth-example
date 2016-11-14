import {AuthService} from '../auth/auth.service';

export class AppController {
    private title = 'Todo App';
    private todoItems: any;
    
    static $inject = [AuthService.iid];
    constructor(private authService: AuthService) { }

    login() {
        this.authService.startSigninMainWindow();
    }

    loginCallback() {
        this.authService.endSigninMainWindow();
    }

    logout() {
        this.authService.startSignoutMainWindow();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}

export default {
    controller: AppController,
    template: `<div class="container">
    <div class="row">
        <h1>{{$ctrl.title}}</h1>
        <a ng-if="!$ctrl.isAuthenticated()" ng-click="$ctrl.login()">Log in</a>
        <a ng-if="$ctrl.isAuthenticated()" ng-click="$ctrl.logout()">Log out</a>
  
        <br/>
        <div ui-view></div>
    </div>
</div>`
};

import { UserManager, User } from 'oidc-client';

const settings: any = {
    authority: 'https://rd-sts.azurewebsites.net/core',
    client_id: '39aafccf-c22d-49b3-9020-aee165fae86c',
    redirect_uri: 'http://localhost:5000/auth.html',
    post_logout_redirect_uri: 'http://localhost:5000/',
    response_type: 'id_token token',
    scope: 'openid profile email myapp-api',

    silent_redirect_uri: 'http://localhost:5000',
    automaticSilentRenew: true,

    filterProtocolClaims: true,
    loadUserInfo: true
};

export class AuthService {
    static iid: string = 'AuthService';

    private loggedIn: boolean = false;
    private user: User;

    private userManager = new UserManager(settings);

    static $inject = ['$rootScope', '$state'];
    constructor(private $rootScope: ng.IRootScopeService, private $state: ng.ui.IStateService) {
        this.userManager.getUser()
            .then((user) => {
                if (user) {
                    this.$rootScope.$apply(() => {
                        this.loggedIn = true;
                        this.user = user;
                    });
                }
                else {
                    this.$rootScope.$apply(() => {
                        this.loggedIn = false;
                        this.user = undefined;
                    });
                }
            })
            .catch((err) => {
                this.$rootScope.$apply(() => {
                    this.loggedIn = false;
                    this.user = undefined;
                });
            });

        this.userManager.events.addUserUnloaded((e) => {
            this.$rootScope.$apply(() => {
                this.loggedIn = false;
                this.user = undefined;
            });
        });
    }

    isAuthenticated() {
        return this.loggedIn;
    }

    getUser() {
        if (this.loggedIn && this.user === undefined) {
            this.userManager.getUser().then((user) => {
                this.$rootScope.$apply(() => {
                    this.loggedIn = true;
                    this.user = user;
                });
            })
            .catch(function (err) {
            });
        }

        return this.user;
    }

    getToken() {
        var user = this.getUser();
        return user.token_type + ' ' + user.access_token;
    }

    startSignoutMainWindow() {
        this.userManager.signoutRedirect();
    }

    endSignoutMainWindow() {
        this.userManager.signoutRedirectCallback().then(() => {
            this.$rootScope.$apply(() => {
                this.loggedIn = false;
                this.user = undefined;
            });
            this.$state.go('root');
        });
    }

    startSigninMainWindow() {
        this.userManager.signinRedirect();
    }

    endSigninMainWindow() {
        this.userManager.signinRedirectCallback()
            .then((user) => {
                this.$rootScope.$apply(() => {
                    this.loggedIn = true;
                    this.user = user;
                });
                this.$state.go('root');
            });
    }
}

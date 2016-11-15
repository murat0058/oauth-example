"use strict";
var oidc_client_1 = require('oidc-client');
var settings = {
    authority: 'https://rd-sts.azurewebsites.net/core',
    client_id: '39aafccf-c22d-49b3-9020-aee165fae86c',
    redirect_uri: 'http://localhost:5000/auth.html',
    post_logout_redirect_uri: 'http://localhost:5000/',
    response_type: 'id_token token',
    scope: 'openid profile email myapp-api roles',
    silent_redirect_uri: 'http://localhost:5000',
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true
};
var AuthService = (function () {
    function AuthService($rootScope, $state) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.loggedIn = false;
        this.accessToken = undefined;
        this.userManager = new oidc_client_1.UserManager(settings);
        this.userManager.getUser()
            .then(function (user) {
            if (user) {
                _this.$rootScope.$apply(function () {
                    _this.loggedIn = true;
                    _this.user = user;
                });
            }
            else {
                _this.$rootScope.$apply(function () {
                    _this.loggedIn = false;
                    _this.user = undefined;
                    _this.accessToken = undefined;
                });
            }
        })
            .catch(function (err) {
            _this.$rootScope.$apply(function () {
                _this.loggedIn = false;
                _this.user = undefined;
                _this.accessToken = undefined;
            });
        });
        this.userManager.events.addUserUnloaded(function (e) {
            _this.$rootScope.$apply(function () {
                _this.loggedIn = false;
                _this.user = undefined;
                _this.accessToken = undefined;
            });
        });
    }
    AuthService.prototype.isAuthenticated = function () {
        return this.loggedIn;
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        if (this.loggedIn && this.user === undefined) {
            this.userManager.getUser().then(function (user) {
                _this.$rootScope.$apply(function () {
                    _this.loggedIn = true;
                    _this.user = user;
                });
            })
                .catch(function (err) {
            });
        }
        return this.user;
    };
    AuthService.prototype.getToken = function () {
        if (this.accessToken === undefined) {
            var user = this.getUser();
            this.accessToken = user.access_token;
        }
        return "Bearer " + this.accessToken;
    };
    AuthService.prototype.startSignoutMainWindow = function () {
        this.userManager.signoutRedirect();
    };
    AuthService.prototype.endSignoutMainWindow = function () {
        var _this = this;
        this.userManager.signoutRedirectCallback().then(function () {
            _this.$rootScope.$apply(function () {
                _this.loggedIn = false;
                _this.user = undefined;
            });
            _this.$state.go('root');
        });
    };
    AuthService.prototype.startSigninMainWindow = function () {
        this.userManager.signinRedirect();
    };
    AuthService.prototype.endSigninMainWindow = function () {
        var _this = this;
        this.userManager.signinRedirectCallback()
            .then(function (user) {
            _this.$rootScope.$apply(function () {
                _this.loggedIn = true;
                _this.user = user;
            });
            _this.$state.go('root');
        });
    };
    AuthService.iid = 'AuthService';
    AuthService.$inject = ['$rootScope', '$state'];
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
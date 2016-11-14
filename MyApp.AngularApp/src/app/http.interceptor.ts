import { AuthService } from './auth/auth.service';

configInterceptor.$inject = ['$httpProvider'];
function configInterceptor($httpProvider: ng.IHttpProvider) {
    $httpProvider.interceptors.push(httpInterceptor);

    httpInterceptor.$inject = ['$q', '$injector'];
    function httpInterceptor($q: ng.IQService, $injector: any) {
        return {
            'request': onRequest
        };

        function onRequest(config) {
            let authService: AuthService = $injector.get(AuthService.iid);
            if (authService.isAuthenticated()) {
                config.headers.Authorization = authService.getToken();
            }

            return config;
        }
    }
}

export default configInterceptor;
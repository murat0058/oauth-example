routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('app.home', {
            url: '/home',
            template: '<app-home></app-home>'
        })

}

export default routeConfig;
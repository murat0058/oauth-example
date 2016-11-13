import * as angular from 'angular';
import * as router from 'angular-ui-router';

import appComponent from './root';
import routeConfig from './routes.config';

export default angular.module('app', [
    <any>router,
    appComponent.name
])
    .config(routeConfig)
    ;
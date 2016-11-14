"use strict";
require('!!file?name=[name].[ext]!./index.html');
require('bootstrap/dist/css/bootstrap.css');
var angular = require('angular');
var index_1 = require('./app/index');
angular.element(document).ready(function () {
    angular.bootstrap(document, [
        index_1.default.name
    ]);
});
//# sourceMappingURL=bootstrap.js.map
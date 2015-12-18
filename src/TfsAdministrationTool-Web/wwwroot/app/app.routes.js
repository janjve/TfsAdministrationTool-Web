(function () {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
        //$routeProvider
        //    .when('/routeOne', {
        //        templateUrl: 'routesDemo/one',
        //        controller: 'adminController',
        //        controllerAs: 'vm'
        //    });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectDetailController', projectDetailController);

    projectDetailController.$inject = ['$location', 'projectDetailPrepService', 'userRoles'];

    function projectDetailController($location, projectDetailPrepService, userRoles) {
        /* jshint validthis:true */
        var vm = this;

        vm.userRoles = userRoles;

        vm.userRole = projectDetailPrepService.userRole;
        vm.projectId = projectDetailPrepService.projectId;
        vm.projectName = projectDetailPrepService.projectName;
        vm.users = projectDetailPrepService.users;

        activate();

        function activate() { }


    }
})();

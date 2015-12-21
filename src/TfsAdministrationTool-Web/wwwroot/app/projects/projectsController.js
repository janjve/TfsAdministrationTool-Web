(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectsController', projectsController);

    projectsController.$inject = ['$location'];

    function projectsController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'projectsController';
        vm.selectedProject = {
            name: 'Project 1!',
            id: '1'
        };
        activate();

        function activate() { }
    }
})();

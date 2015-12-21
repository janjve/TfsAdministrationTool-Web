﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectsController', projectsController);

    projectsController.$inject = ['$location', '$timeout', '$q', '$state'];

    function projectsController($location, $timeout, $q, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'projectsController';
        vm.selectedProject = {
            name: 'Project 1!',
            id: '1'
        };

        vm.simulateQuery = true;
        vm.isDisabled = false;
        vm.projects = loadAll();
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;

        activate();

        ///////////////////////////////////////////

        function activate() { }

        function querySearch(query) {
            var results = query ? vm.projects.filter(createFilterFor(query)) : self.projects,
                deferred;
            if (vm.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {

        }
        function selectedItemChange(item) {
            $state.go('details', { projectId: vm.selectedProject.id, projectName: vm.selectedProject.name });
        }

        function loadAll() {
            var allProjects = 'backedit, ductoop, curreds, bigcraft, Transo, wheadium, agenData, blocket.MQ,\
              Tiltribu, jgrongo.js, Minive, flection, Vanager, sapp.js, 8ballorms, slingPlugr, Fomaste, efredmin,\
              Branspars, MilkJS, spinclus, iisnob, bursionit, Colorwaul, jslity, telect,\
              lighlish, Soundle.js, swimlany, mager.js, Aceboile, ndown, loopideo,\
              mapDate, microls, Textifox, nodegexp, ExtJSLint, mastiki, jslideston,\
              fidena, watchaui, quixedDB, Slidata, implettu, klastcli, eveapopup, Exampleast,\
              shupsList, antabox';
            return allProjects.split(/, +/g).map(function (project) {
                return {
                    value: project.toLowerCase(),
                    display: project
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(project) {
                return (project.value.indexOf(lowercaseQuery) === 0);
            };
        }



    }
})();

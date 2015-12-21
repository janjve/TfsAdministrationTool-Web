(function () {
    'use strict';

    angular.module('app')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), 'projects');
    }

    function getStates() {
        return [
            {
                state: 'projects',
                config: {
                    url: '/projects',
                    templateUrl: 'wwwroot/app/projects/projects.html',
                    controller: 'projectsController as vm',
                    bindToController: true
                }
            },
            {
                state: 'projects.details',
                config: {
                    url: '/details/:projectId',
                    templateUrl: 'wwwroot/app/projects/details/projectDetail.html',
                    controller: 'projectDetailController as vm',
                    bindToController: true,
                    resolve: {
                        projectDetailPrepService: ['$stateParams', function ($stateParams) {
                            var userModel = {
                                userRole: 'admin', // Lookup
                                projectId: $stateParams.projectId,
                                projectName: "ProjectName", // Lookup
                                users: ['user1', 'user2', 'user3'] // Lookup
                            }
                            return userModel;
                        }]
                    }
                }
            }
        ];
    }
})();
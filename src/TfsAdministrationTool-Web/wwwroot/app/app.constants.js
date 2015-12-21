(function () {
    'use strict';

    angular.module('app')
        .constant('userRoles', {
            ADMIN: 'Admin',
            USER: 'User',
            UNKNOWN: 'Unknown'
        });
})();
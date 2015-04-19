'use strict';

angular.module('prototype')
  .controller('LoginCtrl', function ($scope) {
    console.log('login ctrl')

        $scope.user = {
            name: "",
            password: ""
        };
    });

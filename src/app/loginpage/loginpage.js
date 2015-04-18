'use strict';

angular.module('prototype')
  .controller('LoginCtrl', function ($scope) {
    console.log('login ctrl')

        $scope.user = {
            name: "",
            password: ""
        }


        var form = {"$error": {"required": [
            {"$viewValue": "", "$modelValue": "", "$validators": {}, "$asyncValidators": {}, "$parsers": [], "$formatters": [null], "$viewChangeListeners": [], "$untouched": true, "$touched": false, "$pristine": true, "$dirty": false, "$valid": false, "$invalid": true, "$error": {"required": true}, "$name": "", "$options": null},
            {"$viewValue": "", "$modelValue": "", "$validators": {}, "$asyncValidators": {}, "$parsers": [], "$formatters": [null], "$viewChangeListeners": [], "$untouched": true, "$touched": false, "$pristine": true, "$dirty": false, "$valid": false, "$invalid": true, "$error": {"required": true}, "$name": "", "$options": null}
        ]}, "$name": "loginForm", "$dirty": false, "$pristine": true, "$valid": false, "$invalid": true, "$submitted": false}

    });

'use strict';

/**
 * @ngdoc function
 * @name motologApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the motologApp
 */
angular.module('motologApp')
    .controller('MainCtrl', function ($scope, ENV) {
        console.log('I am running in ' + ENV.name);
    });
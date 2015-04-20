'use strict';

/**
 * @ngdoc function
 * @name motologApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the motologApp
 */
angular.module('motologApp')
    .controller('VehicleCtrl', function ($scope, $location, $http, toastr, ENV) {
        var id = $location.search().id;

        // Load up the vehicle
        if (id) {
            $http.get(ENV.apiEndpoint + 'vehicle/' + id).then(function (vehicle) {
                $scope.vehicle = vehicle.data;
            }, function (reason) {
                toastr.error('Could not find vehicle');
                console.log(reason);
            });
        }

        $scope.id = id;
    });
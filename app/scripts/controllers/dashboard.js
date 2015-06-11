'use strict';

/**
 * @ngdoc function
 * @name motologApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the motologApp
 */
angular.module('motologApp')
    .controller('DashboardCtrl', function ($scope, $http, toastr, ENV) {

        function getMyVehicles() {
            $http.get(ENV.apiEndpoint + 'vehicle/myVehicles').then(function (vehicles) {
                $scope.vehicles = vehicles.data;
            });
        }

        function addVehicle() {
            $http.post(ENV.apiEndpoint + 'vehicle/addVehicle', {
                make: $scope.make,
                year: new Date($scope.year, 1, 1)
            }).then(function () {
                // Clear input fields
                $scope.make = '';
                $scope.year = '';
                $scope.addVehicleFrm.$setPristine();
                $scope.addVehicleFrm.$setUntouched();

                toastr.success('Vehicle added');
                getMyVehicles();
            });
        }

        function deleteVehicle(vehicle) {
            $http.post(ENV.apiEndpoint + 'vehicle/destroy/' + vehicle.id).then(function () {
                getMyVehicles();
            });
        }

        $scope.addVehicle = addVehicle;
        $scope.deleteVehicle = deleteVehicle;

        getMyVehicles();
    });
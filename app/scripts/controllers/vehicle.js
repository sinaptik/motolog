'use strict';

/**
 * @ngdoc function
 * @name motologApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the motologApp
 */
angular.module('motologApp')
    .controller('VehicleCtrl', function ($scope, $state, $stateParams, $http, toastr, ENV) {
        var id = $stateParams.id;

        // Load up the vehicle
        if (id) {
            $http.get(ENV.apiEndpoint + 'vehicle/' + id).then(function (vehicle) {
                $scope.vehicle = vehicle.data;
            }, function (reason) {
                toastr.error('Could not find vehicle');

                console.log(reason);

                $state.go('dashboard');
            });
        } else {
            $state.go('dashboard'); //no vehicle supplied
        }

        function addFuelUp() {
            //TODO: check if similar fuel up exists

            $http.post(ENV.apiEndpoint + 'fuelup/addFuelUp', {
                litres: $scope.litres,
                costPerLitre: $scope.costPerLitre,
                kilometersSinceLastFuelUp: $scope.kilometersSinceLastFuelUp,
                vehicle: $scope.vehicle
            }).then(function () {
                // Clear input fields
                $scope.litres = '';
                $scope.costPerLitre = '';
                $scope.kilometersSinceLastFuelUp = '';
                $scope.addFuelUpFrm.$setPristine();
                $scope.addFuelUpFrm.$setUntouched();

                toastr.success('Fuelup added');
            }, function (reason) {
                toastr.error('Error adding fuel up');
                console.log(reason);
            });
        }

        function addOilChange() {
            $http.post(ENV.apiEndpoint + 'maintenance/addMaintenance', {
                type: 'oilchange',
                vehicle: $scope.vehicle
            }).then(function () {
                toastr.success('Oil change logged');
            }, function (reason) {
                toastr.error('Error logging oil change');
                console.log(reason);
            });
        }

        $scope.id = id;
        $scope.addFuelUp = addFuelUp;
        $scope.addOilChange = addOilChange;
    });
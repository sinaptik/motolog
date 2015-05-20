'use strict';

/**
 * @ngdoc function
 * @name motologApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the motologApp
 */
angular.module('motologApp')
    .controller('AuthCtrl', function ($scope, $auth, $http, ENV) {
        $scope.isAuthenticated = $auth.isAuthenticated;

        function loadCurrentUser() {
            $http.get(ENV.apiEndpoint + 'user/me').then(function (user) {
                $scope.me = user.data;
            });
        }

        if ($scope.isAuthenticated()) {
            loadCurrentUser();
        } else {
            //remove expired token
            $auth.removeToken()
        }

        function logout() {
            $auth.logout();
        }

        function twitterLogin() {
            /*$auth.signup({
                email: 'email@gmail.com',
                password: 'alongpassword'
            }).then(function (response) {
                console.log(response.data);
            });*/

            $auth.authenticate('twitter');
        }

        function googleLogin() {
            $auth.authenticate('google').then(function () {
                loadCurrentUser();
            });
        }

        $scope.logout = logout;
        $scope.twitterLogin = twitterLogin;
        $scope.googleLogin = googleLogin;
    });
'use strict';

/**
 * @ngdoc overview
 * @name motologApp
 * @description
 * # motologApp
 *
 * Main module of the application.
 */
angular
    .module('motologApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'satellizer',
    'config',
    'toastr',
    'angular-loading-bar'
  ])
    .config(function ($stateProvider, $urlRouterProvider, $authProvider, ENV, toastrConfig) {

        $authProvider.twitter({
            url: ENV.apiEndpoint + 'user/twitterlogin'
        });

        $authProvider.google({
            url: ENV.apiEndpoint + 'user/googleLogin',
            clientId: '676358682784-716e8rma31akdv7jlksilgr6vsm7ook9.apps.googleusercontent.com'
        });

        //$authProvider.loginUrl = '/auth/login';
        //$authProvider.signupUrl = '/auth/signup';

        $stateProvider.state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        }).state('admin', {
            url: '/admin',
            templateUrl: 'views/admin.html',
            controller: 'AdminCtrl'
        }).state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }).state('vehicle', {
            url: '/vehicle?id',
            templateUrl: 'views/vehicle.html',
            controller: 'VehicleCtrl'
        });

        $urlRouterProvider.otherwise('/');

        toastrConfig.positionClass = 'toast-top-center';
    });
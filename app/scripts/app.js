'use strict';
/* global app:true */
/* exported app */
/**
 * @ngdoc overview
 * @name tasklist2App
 * @description
 * # tasklist2App
 *
 * Main module of the application.
 */
var app = angular.module('tasklist2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://luminous-torch-2386.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'TodosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


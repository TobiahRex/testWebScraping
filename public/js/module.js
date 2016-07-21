'use strict';

var app = angular.module('myApp', ['ui.router', 'myDirectiveModule']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })

  $urlRouterProvider.otherwise('/');
});

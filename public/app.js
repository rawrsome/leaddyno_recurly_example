'use strict';

angular.module('myApp', [
    'ngRoute',					// <=== add new modules
    'myApp.home',
    'myApp.account'
]).
config(['$routeProvider', function($routeProvider) {
    // Set defualt view of our app to home
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);

var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : '21_firepage.html'
    })
    .when('/water', {
        templateUrl : '21_waterpage.html',
    })
    .when('/grass', {
        templateUrl : '21_grasspage.html'
    })
    .when('/electric', {
        templateUrl : '21_electricpage.html'
    })
    .when('/ghost', {
        templateUrl : '21_ghostpage.html'
    })
    .otherwise({redirectTo: '/'});
});


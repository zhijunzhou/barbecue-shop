define(['angular', 'require', 'angular-route','angular-resource','bootstrap','controllers','filters','directives','services','data'], function (angular, require) {
    var app = angular.module("BarbecueShop", ['ngRoute','ngResource','controllers','filters','directives','services']);

    app.config(function($routeProvider,$locationProvider,$controllerProvider) {

        $routeProvider
            .when('/', {
                controller: "HomeController",
                templateUrl:'tpls/home.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(false);
    });

    return app;
});


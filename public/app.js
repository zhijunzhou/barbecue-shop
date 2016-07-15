define(['angular', 'require', 'angular-route','angular-resource','bootstrap','controllers',
    'filters','directives','services','factories','data'], function (angular, require) {

    var app = angular.module('BarbecueShop', 
        ['ngRoute','ngResource','controllers','filters','directives','services']);

    app.config(function($routeProvider,$locationProvider,$controllerProvider) {

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl:'tpls/home.html'
            })
            .when('/shop', {
                controller: 'ShopController',
                templateUrl: 'tpls/shop.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

    return app;
});


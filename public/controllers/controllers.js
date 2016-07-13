define(['angular', 'services','directives', 'data'], function(angular, services, directives, data) {

    var app = angular.module('controllers', []);    

    app.constant('APP_TITLE', 'BB Shop');

    app.controller("rootCtrl", function ($scope) {
    });

    app.controller("HomeController", function($scope, APP_TITLE) {
        
        $scope.APP_TITLE = APP_TITLE;

        $scope.hotCities = data.hotCities;

        // FoodService.getFoodList().query({text: "Il3FlfB1BHBasRt9iOK0yA=="}).$promise.then(function(foods) {
        // 	console.log(foods);
        // }, function(err) {
        // 	console.log(err);
        // });       

        // FoodService.getCustomerList().query().$promise.then(function(list) {
        // 	console.log(list);
        // }, function(err) {
        // 	console.log(err);
        // });
    });

    app.controller("ShopController", function($scope, APP_TITLE) {
        $scope.shop_title = APP_TITLE;
        $scope.tabs = data.tabs;

        $scope.currentState = "menu";
    });

    return app;

});

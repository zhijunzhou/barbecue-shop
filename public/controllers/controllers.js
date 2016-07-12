define(['angular', 'services','directives'], function(angular, services, directives) {

    var app = angular.module('controllers', []);

    app.controller("HomeController", function($scope, FoodService) {
        

        FoodService.getFoodList().query({text: "Il3FlfB1BHBasRt9iOK0yA=="}).$promise.then(function(foods) {
        	console.log(foods);
        }, function(err) {
        	console.log(err);
        });       

        FoodService.getCustomerList().query().$promise.then(function(list) {
        	console.log(list);
        }, function(err) {
        	console.log(err);
        });     


    });

    return app;

});

define(['angular'], function (angular) {

	var app = angular.module('filters', []);

	app.filter('capitalize', function() {
        return function(input, param) {
            return input.substring(0,1).toUpperCase() + input.substring(1);
        };
    });

	return app;

});
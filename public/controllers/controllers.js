define(['angular', 'services','directives', 'data'], function(angular, services, directives, data) {

    var app = angular.module('controllers', ['factories']);    

    app.constant('APP_TITLE', 'BB Shop');

    app.controller("rootCtrl", function ($scope) {
    });

    app.controller("HomeController", function($scope, APP_TITLE) {
        
        $scope.APP_TITLE = APP_TITLE;

        $scope.hotCities = data.hotCities;

    });

    app.controller("ShopController", function($scope, APP_TITLE) {
        $scope.shop_title = APP_TITLE;
        $scope.tabs = data.tabs;
        $scope.currentState = "menu";
        $scope.types = data.goodTypes;
        $scope.currentType = "1"; // type id
        $scope.currentGoods = [];
        $scope.currentName = "";

        $scope.$watch('currentType', function (n, o) {
            // console.log(n + 'changed' + o);
            $scope.types.forEach(function (gt, i) {
                if(gt._id === $scope.currentType) {
                    $scope.currentGoods = gt.goods;
                    $scope.currentName = gt.name;               
                }
            });
        });

    });

    return app;

});

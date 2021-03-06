define(['angular', 'services','directives', 'data'], function(angular, services, directives, data) {

    var app = angular.module('controllers', ['factories']);    

    app.constant('APP_TITLE', 'BB Shop');

    app.controller("rootCtrl", function ($scope, $rootScope) {
        

        $scope.$watch(function() {
            return $rootScope.cartData;
        }, function() {
            $scope.totalCount = 0;
            $scope.totalPrice = 0.0;

            $scope.cartData = $rootScope.cartData;
            if($scope.cartData) {                
                $rootScope.cartData.forEach(function(goods) {
                    $scope.totalCount += goods.count || 0;
                    $scope.totalPrice += (goods.count || 0) * (goods.price || 0);
                });
            }

        }, true);
    });

    app.controller("HomeController", function($scope, APP_TITLE) {
        
        $scope.APP_TITLE = APP_TITLE;

        $scope.hotCities = data.hotCities;

    });

    app.controller("ShopController", function($scope, APP_TITLE, Cart) {
        $scope.tabs  = data.tabs;
        $scope.types = data.goodTypes;
        $scope.Cart  = Cart;

        $scope.shop_title   = APP_TITLE;

        $scope.currentState = "menu";
        $scope.currentType  = "1"; // type id
        $scope.currentGoods = [];
        $scope.currentName  = "";

        $scope.$watch('currentType', function (n, o) {
            // console.log(n + 'changed' + o);
            $scope.types.forEach(function (gt, i) {
                if(gt._id === $scope.currentType) {
                    $scope.currentGoods = gt.goods;
                    $scope.currentName  = gt.name;               
                }
            });
        });

        $('.restaurant-content').height($('body').outerHeight(true) - $('.shop-header').outerHeight(true) - $('.menu-cart').outerHeight(true) * 2);

        // $('.restaurant-food').height(screen.height - $('.shop-header').outerHeight(true) - $('.menu-cart').outerHeight(true) * 2);

    });

    app.controller("McartController", function($scope, $rootScope, Cart) {
        $scope.chili = true;
        $scope.tensFlag = false;

        $scope.changeTaste = function(s) {
            Cart.setAllTaste(s);
        };

        $scope.changeTens = function(tensFlag) {
            if(tensFlag) Cart.setTimes(10);
            else Cart.setTimes(1);
        };

        $scope.countPlus = function(gd) {
            Cart.addProduct(gd);
        };

        $scope.countMinus = function(gd) {
            Cart.decreaseProduct(gd);
        };
    });

    return app;

});

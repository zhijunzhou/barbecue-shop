define(['angular'], function(angular) {

    var app = angular.module('directives', []);

    app.directive('emptyLine', function() {
        return {
            restrict: "E",
            replace: true,
            template: '<div class="col-xs-12">&nbsp;</div>'
        };
    });

    app.directive('navTop', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: 'views/common/navTop.html',
        };
    });

    app.directive('leftMenu', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: 'views/common/leftMenu.html',
        };
    });

    app.directive('mainFooter', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: 'views/common/mainFooter.html',
        };
    });

    app.directive('mainContent', function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: 'views/tpls/mainContent.html',
        };
    });

    app.directive('focus', function() {
        return {
            link: function(scope, element, attrs) {
                element[0].focus();
            }
        };
    });

    app.directive('restaurantTab', function() {
        return {
            restrict: "E",
            scope: {
                state: "=",
                restaurant: "="
            },
            templateUrl: "tpls/tabs.html",
            link: function(scope) {
                scope.tabs = [{
                    name: "菜单",
                    state: "menu"
                }, {
                    name: "评价",
                    state: "ratings"
                }, {
                    name: "商家",
                    state: "info"
                }],
                scope.changeState = function(scope, element, attrs) {
                    // todo
                }
            }
        };
    });

    app.directive('menuNav', function() {
        return {
            restrict: "E",
            scope: {
                itemsTypes: '=items',
                good:"=category"
            },
            templateUrl: "tpls/menu.html",
            link: function (scope, element, attrs) {
                scope.selectMenu = function (idx) {
                    scope.good = idx;
                }
            }
        };
    });

    app.directive('restaurantFood', function () {
        return {
            restrict: "E",
            scope: {
                goods: '=goods'
            },
            templateUrl: "tpls/goods.html"
        };
    })

    app.directive('rating', function () {
        return {
            restrict: "E",
            scope: {},
            template: '<a class="rating-link"><i class="glyphicon glyphicon-star" ng-repeat="x in [1,2,3,4,5]"></i>0评价</a>'
        }
    })

    app.directive('loading', function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="loading"><img src="images/loadingcirclests16.gif" />LOADING...</div>',
            link: function(scope, element, attr) {
                scope.$watch('loading', function(val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    });

    return app;

});

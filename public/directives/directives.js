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
            link: function(r) {
                r.tabs = [{
                    name: "菜单",
                    state: "menu"
                }, {
                    name: "评价",
                    state: "ratings"
                }, {
                    name: "商家",
                    state: "info"
                }],
                r.changeState = function(r) {
                    
                }
            }
        };
    });

    app.directive('menuNav', function() {

    });

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

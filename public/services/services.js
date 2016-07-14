define(['angular'], function(angular) {

    var web_url = "http://localhost:81";

    var app = angular.module('services', ['ngResource']);

    app.service('UserService', function($resource) {

        this.signup = function() {
            return $resource('/user/create', {}, {
                save: {
                    method: 'POST'
                }
            });
        };

        this.signin = function() {
            return $resource('/user/login', {}, {
                query: {
                    method: 'POST'
                }
            });
        };

    });

    app.service('NoteService', function($resource) {
        this.createNote = function() {
            return $resource('/note/create', {}, {
                save: {
                    method: "POST"
                }
            });
        };
    });

    app.service('FoodService', function ($resource) {
        this.getFoodList = function () {
            return $resource(web_url + "/WebServiceEx.asmx/JSON_Decrypt?_dc=1468307972369", {}, {
                query: {
                    method: "POST"
                }
            });
        }

        this.getCustomerList = function () {
            return $resource(web_url + "/customer.json?1468307972432", {}, {
                query: {
                    method: "GET"
                }
            });
        }
    });

    // Shopping Cart
    app.factory('Cart', function($rootScope) {
        // todo
    });

    return app;

});

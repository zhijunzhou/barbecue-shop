define(['angular'], function(angular) {

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

    return app;

});

'use strict';
require.config({
    paths:{
        'jquery': 'libs/jquery.min',
        'bootstrap': 'libs/bootstrap.min',
        'angular': 'libs/angular',
        'angular-route': 'libs/angular-route',
        'angular-resource':'libs/angular-resource',
        'controllers':'controllers/controllers',
        'filters': 'filters/filters',
        'directives': 'directives/directives',
        'services':'services/services',
        'factories': 'services/factories',
        'data':'model/data'
    },
    map:{
      
    },
    shim:{
        jquery:{
            exports:'jquery'
        },
        bootstrap:{
          deps:[
              'jquery'
          ],
          exports: 'bootstrap'
        },
        angular:{
            exports:'angular'
        },
        'angular-route':{
            deps: ['angular']
        },
        'angular-resource':{
            deps: ['angular'],
        }
    },
    waitSeconds:0,
    // urlArgs: 't=' + (new Date()).getTime()
});

function createStyleSheet(url) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href= url;
    document.getElementsByTagName('head')[0].appendChild(link);
}


function loadCss(urls) {
    for(var i = 0;i < urls.length;i++) {
        createStyleSheet(urls[i]);
    }
}

loadCss([
    'libs/bootstrap.min.css',
    'css/styles.css',
]);

require(['angular','app'],function(angular,app){
    //angularjs start
    angular.bootstrap(document,['BarbecueShop']);
});
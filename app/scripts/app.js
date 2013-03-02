'use strict';

// Angular setup
var tooglesApp = angular.module('tooglesApp', ['ngSanitize'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/browse', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/browse/:category', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/search/:query', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/queue', { templateUrl: 'views/list.html', controller: 'QueueCtrl' });
    $routeProvider.when('/watched', { templateUrl: 'views/list.html', controller: 'WatchedCtrl' });
    $routeProvider.when('/view/:id', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/playlist/:id', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/playlist/:id/:start', { templateUrl: 'views/view.html', controller: 'ViewCtrl' });
    $routeProvider.when('/user/:username', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.when('/user/:username/:feed', { templateUrl: 'views/list.html', controller: 'ListCtrl' });
    $routeProvider.otherwise({ redirectTo: '/browse' });
  }]).run(function($rootScope) {
	  $rootScope.ignoreQueued = false;
	  $rootScope.ignoreWatched = false;
	  $rootScope.ignoreIgnored = true;
  });
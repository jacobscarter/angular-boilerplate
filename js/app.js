angular.module('myApp', [
  'myApp.services',
  'myApp.controllers',
  'ui.router',
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
	function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url : "/",
        templateUrl: 'partials/home.html',
        controller: 'mainController'
      });
	}
]);
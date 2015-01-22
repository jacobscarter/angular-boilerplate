var boilerPlateApp = angular.module('boilerPlateApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
	function($stateProvider, $urlRouterProvider, $locationProvider) {


    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('main', {
        url : "/",
        templateUrl: 'partials/main.html',
        controller: 'mainController'
      })
      .state('home', {
        url : "/second-page",
        templateUrl: 'partials/second.html',
        controller: 'secondController'
      })
      ;
	}
])
.controller('mainController', function($scope) {

  $scope.mainMessage = "Main Controller Loaded";

})
.controller('secondController', function($scope) {

  $scope.secondMessage = "Second Controller Loaded";

})



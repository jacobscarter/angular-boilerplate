var boilerPlateApp = angular.module('boilerPlateApp', [
  'ui.router',
  'firebase'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
	function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url : "/",
        views : {
          "fullpage" : {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
          }
        }
      })
      ;
	}
]);





boilerPlateApp.controller('mainController', 
  ['$state', '$scope', '$firebase', 
  function($state, $scope, $firebase) {

  //Enter Controller Functions Here

}]);


boilerPlateApp.factory('MyService', 
  ['$rootscope', '$firebase', '$state', '$q', 
  function($rootScope, $firebase, $state, $q) {

    //enter your service function here


    return {
      //reference your function here to be used by controllers, directives, etc...
    };

  }]);


boilerPlateApp.directive('myDirective', [
	'$rootScope',
	function($rootScope) {

		return {
			restrict: 'E',
			scope: true,
			replace: true,
			templateUrl: 'partials/directives/myTemplate.html',
			link: function($scope, $element, $attrs) {

				//add directive functions here

			}
		};
	}
]);
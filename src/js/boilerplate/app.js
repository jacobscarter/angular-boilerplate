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



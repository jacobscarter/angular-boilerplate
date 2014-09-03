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
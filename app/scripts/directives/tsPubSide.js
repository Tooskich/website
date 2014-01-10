'use strict';

angular.module('websiteApp')
	.directive('tsPubSide', function() {
		return {
			templateUrl: 'views/directives/pub/side.html',
			restrict: 'EACM',
			link: function postLink(scope, element, attrs) {
			}
		};
	});
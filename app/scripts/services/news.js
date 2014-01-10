'use strict';

angular.module('websiteApp')
	.factory('News', function() {
		var News = [

		];

		var meaningOfLife = 42;

		// Public API here
		return {
			someMethod: function() {
				return meaningOfLife;
			}
		};
	});
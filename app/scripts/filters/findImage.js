'use strict';

angular.module('websiteApp')
	.filter('findImage', function() {
		return function(input) {
			var re = /(https?:\/\/.*\.(?:png|jpg|svg|jpeg))(?![>|<|'|"])/gi;
			input = re.exec(input);
			input = !! input ? input[0] : '/images/site/Sflocon_vecteur_Transparent.png';
			return input;
		};
	});
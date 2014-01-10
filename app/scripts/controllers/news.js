'use strict';

angular.module('websiteApp')
	.controller('NewsCtrl', function($scope, $routeParams) {
		var newsId = $routeParams.id;
		$scope.news = {
            id: 3,
            title: 'Exemple 3 Longue',
            author: 'Séb',
            date: 1389283404,
            content: 'Voilà un exemple de news un peu plus long. Elle parce que le texte est décidement trop long. <a href="hahaha">devrait être coupée vers la fin</a>, <img src="https://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" />',
        };
		$scope.disqusId = 'News' + newsId;
	});
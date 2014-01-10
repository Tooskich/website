'use strict';

angular.module('websiteApp')
	.service('News', function News() {

		this.getNews = function(id) {
			var news = [{
				id: 0,
				title: 'Exemple 0',
				author: 'Séb',
				date: 1389283401,
				content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
			}, {
				id: 1,
				title: 'Exemple 1',
				author: 'Séb',
				date: 1389283402,
				content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
			}, {
				id: 2,
				title: 'Exemple 2',
				author: 'Séb',
				date: 1389283403,
				content: 'Voilà un exemple de news.',
			}, {
				id: 3,
				title: 'Exemple 3 Longue',
				author: 'Séb',
				date: 1389283404,
				content: 'Voilà un exemple de news un peu plus long. Elle devrait être coupée vers la fin, parce que le texte est décidement trop long. Et avec du html : <img src="https://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" />',
			},{
				id: 0,
				title: 'Exemple 0',
				author: 'Séb',
				date: 1389283401,
				content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
			}, {
				id: 1,
				title: 'Exemple 1',
				author: 'Séb',
				date: 1389283402,
				content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
			}, {
				id: 2,
				title: 'Exemple 2',
				author: 'Séb',
				date: 1389283403,
				content: 'Voilà un exemple de news.',
			}, {
				id: 3,
				title: 'Exemple 3 Longue',
				author: 'Séb',
				date: 1389283404,
				content: 'Voilà un exemple de news un peu plus long. Elle devrait être coupée vers la fin, parce que le texte est décidement trop long. Et avec du html : <img src="https://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" />',
			},{
				id: 0,
				title: 'Exemple 0',
				author: 'Séb',
				date: 1389283401,
				content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
			}, {
				id: 1,
				title: 'Exemple 1',
				author: 'Séb',
				date: 1389283402,
				content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
			}, {
				id: 2,
				title: 'Exemple 2',
				author: 'Séb',
				date: 1389283403,
				content: 'Voilà un exemple de news.',
			}, {
				id: 3,
				title: 'Exemple 3 Longue',
				author: 'Séb',
				date: 1389283404,
				content: 'Voilà un exemple de news un peu plus long. Elle devrait être coupée vers la fin, parce que le texte est décidement trop long. Et avec du html : <img src="https://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" />',
			}, ];
			if (!id) {
				return news;
			} else {
				return news[id];
			}
		};


	});
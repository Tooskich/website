'use strict';

angular.module('websiteApp')
    .controller('MainCtrl', function($scope) {
        var news = [{
            id: 1,
            title: 'Exemple 1',
            author: 'Séb',
            date: 1389283402,
            content: 'Voilà un exemple de news. src="http://www.swiss-ski.ch/uploads/pics/Aerni_Luca_07.jpg"',
        }, {
            id: 3,
            title: 'Exemple 3 Longue',
            author: 'Séb',
            date: 1389283404,
            content: 'Voilà un exemple de news un peu plus long. Elle devrait être coupée vers la fin, parce que le texte est décidement trop long.',
        }, {
            id: 2,
            title: 'Exemple 2',
            author: 'Séb',
            date: 1389283403,
            content: 'Voilà un exemple de news.',
        }, ];
        $scope.news = news;
    });
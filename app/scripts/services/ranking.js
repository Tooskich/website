'use strict';
/*
 * Rankings are only for the general rankings of the WC, EC or FIS.
 */
angular.module('websiteApp')
    .factory('Ranking', function() {
        var rankingsLinks = [{
            title: 'Coupe du Monde',
            link: 'Rankings?type=WC'
        }, {
            title: 'Coupe d\'Europe',
            link: 'Rankings?type=EC'
        }, {
            title: 'FIS',
            link: 'Rankings?type=FIS'
        }, ];

        var leaders = {
            men: [{
                name: 'Marcel Hirscher',
                points: 256
            }, {
                name: 'Aksel Lund Svindal',
                points: 255
            }, {
                name: 'Ted Ligety',
                points: 254
            }, ],
            women: [{
                name: 'Lara Gut',
                points: 256
            }, {
                name: 'Anna Fenninger',
                points: 255
            }, {
                name: 'Michel Gisin',
                points: 254
            }, ],
        };

        return {
            getRankingLinks: function() {
                return rankingsLinks;
            },

            getGeneralRanking: function(cat, genre) {
                return genre === 'F' ? leaders.women : leaders.men;
            },

        };
    });

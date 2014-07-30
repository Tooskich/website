'use strict';
/*
 * Rankings are only for the general rankings of the WC, EC or FIS.
 */
angular.module('websiteApp')
    .factory('Ranking', ['$http', 'Server',
        function($http, Server) {
            var rankFile = '/ranking.json',
                leaders;
            $http.get(rankFile, {
                cache: true
            })
                .then(function(file) {
                    var men = file.data[0].men,
                        women = file.data[0].women;
                    men = men.map(function(el) {
                        return {
                            name: el[1],
                            points: el[3],
                            country: el[2],
                            place: el[0],
                        };
                    });
                    women = women.map(function(el) {
                        return {
                            name: el[1],
                            points: el[3],
                            country: el[2],
                            place: el[0],
                        };
                    });
                    leaders = {
                        men: men,
                        women: women,
                    };
                }, function() {
                    console.log(
                        'Les classements généraux n\'ont pas été publiés.'
                    );
                });

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

            return {
                getRankingLinks: function() {
                    return rankingsLinks;
                },

                getGeneralRanking: function(cat, genre) {
                    return genre === 'F' ? leaders.women : leaders.men;
                },

            };
        }
    ]);

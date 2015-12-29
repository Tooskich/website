'use strict';
/*
 * Rankings are only for the general rankings of the WC, EC or FIS.
 */
angular.module('websiteApp')
    .factory('Ranking', ['$http', 'Server',
        function($http, Server) {
            var rankFile = '/ranking.json',
                leaders = {
                    men: [],
                    women: [],
                },
                rankings = {};
            $http.get(rankFile, {
                cache: true
            })
                .then(function(file) {
                    for (var i = 0; i < file.data.length; i++) {
                        var id = file.data[i].id,
                            men = file.data[i].men,
                            women = file.data[i].women,
                            item = {
                                men: [],
                                women: [],
                            };
                        if (men && men.length >= 1) {
                            men = men.map(function(el) {
                                return {
                                    name: el[1],
                                    points: el[3],
                                    country: el[2],
                                    place: el[0],
                                };
                            });
                            item.men = men;
                        }
                        if (women && women.length >= 1) {
                            women = women.map(function(el) {
                                return {
                                    name: el[1],
                                    points: el[3],
                                    country: el[2],
                                    place: el[0],
                                };
                            });
                            item.women = women;
                        }
                        rankings[id] = item;
                    }
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
                    leaders = rankings[cat];
                    return genre === 'F' ? leaders.women : leaders.men;
                },

            };
        }
    ]);

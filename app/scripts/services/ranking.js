'use strict';

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

    var rankings = [{
      id: 1,
      date: 1389476529,
      title: 'GS Adelboden',
      category: 'WC',
      genre: 'H'
    }, {
      id: 2,
      date: 1388476529,
      title: 'SL Adelboden',
      category: 'WC',
      genre: 'H'
    }, {
      id: 3,
      date: 1387476529,
      title: 'GS Alta Badia',
      category: 'WC',
      genre: 'F'
    }, {
      id: 4,
      date: 1386476529,
      title: 'DH Alta Badia',
      category: 'WC',
      genre: 'F'
    }, {
      id: 5,
      date: 1385476529,
      title: 'DH Adelboden',
      category: 'WC',
      genre: 'H'
    }, {
      id: 6,
      date: 1384476529,
      title: 'DH Adelboden',
      category: 'WC',
      genre: 'H'
    }, ];

    var ranking = [];

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

      getRankings: function(cat) {
        return rankings;
      },

      getRanking: function(id) {
        return ranking;
      },

      getGeneralRanking: function(cat, genre) {
        return genre === 'F' ? leaders.women : leaders.men;
      },

    };
  });
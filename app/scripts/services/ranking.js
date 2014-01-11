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
    }, {
      id: 2,
      date: 1388476529,
      title: 'SL Adelboden',
      category: 'WC',
    }, {
      id: 3,
      date: 1387476529,
      title: 'GS Alta Badia',
      category: 'WC',
    }, {
      id: 4,
      date: 1386476529,
      title: 'DH Alta Badia',
      category: 'WC',
    }, {
      id: 5,
      date: 1385476529,
      title: 'DH Adelboden',
      category: 'WC',
    }, {
      id: 6,
      date: 1384476529,
      title: 'DH Adelboden',
      category: 'WC',
    }, ];
    return {
      getRankingLinks: function() {
        return rankingsLinks;
      },

      getRankings: function(cat) {
        return rankings;
      },

    };
  });
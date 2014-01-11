'use strict';

angular.module('websiteApp')
  .factory('Ranking', function () {
    var rankings = [{
          title: 'Coupe du Monde',
          link: 'Ranking?type=WC'
        }, {
          title: 'Coupe d\'Europe',
          link: 'Ranking?type=EC'
        }, {
          title: 'FIS',
          link: 'Ranking?type=FIS'
        }, ]
    return {
      getRankingLinks: function() {
        return rankings;
      },

    };
  });

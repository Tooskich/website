'use strict';

angular.module('websiteApp')
  .factory('Blog', function() {
    var blogs = [{
      title: 'Antoine Perrottet',
      link: 'Blog?id=1'
    }, {
      title: 'Axel Béguelin',
      link: 'Blog?id=2'
    }, {
      title: 'Un autre Skieur',
      link: 'Blog?id=3'
    }, ]

    var meaningOfLife = 42;

    // Public API here
    return {
      getBlogLinks: function() {
        return blogs;
      },

      getNews: function(id) {
        return [{
          id: 0,
          author: 'Séb',
          title: 'News n°0',
          content: 'Mon super text, avec du html: <img src="http://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" /><a href="http://tooski.ch"></a>',
          date: 1389390694,
        }, {
          id: 1,
          author: 'Séb',
          title: 'News n°1',
          content: 'Mon super text, avec du html: <img src="http://www.fricktal24.ch/typo3temp/pics/Ski-Aerni_Luca_01_55d138efee.jpg" /><a href="http://tooski.ch"></a>',
          date: 1389390695,
        }, {
          id: 2,
          author: 'Séb',
          title: 'News n°2',
          content: 'Mon super text, avec du html: <a href="https://tooski.ch"><img src="http://skiweltcup.tv/wp-content/themes/tvsportnews/images/09-aerni002-klein-swiss-ski.jpg" /></a>',
          date: 1389390696,
        }, ];
      },

    };
  });
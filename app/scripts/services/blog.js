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
      getBlogNames: function() {
        return blogs;
      },

    };
  });
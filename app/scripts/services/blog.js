'use strict';

angular.module('websiteApp')
  .factory('Blog', function() {
    var blogs = [{
      title: 'Antoine Perrottet',
      link: 'blog?id=1'
    }, {
      title: 'Axel Béguelin',
      link: ''
    }, {
      title: 'Un autre Skieur',
      link: ''
    }, ]

    var meaningOfLife = 42;

    // Public API here
    return {
      getBlogNames: function() {
        return blogs;
      },

    };
  });
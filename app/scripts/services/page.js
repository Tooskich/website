'use strict';

angular.module('websiteApp')
  .factory('Page', function () {
    var pages = [{
          title: 'Staff',
          link: ''
        }, {
          title: 'Truc',
          link: ''
        }, {
          title: 'Publicité',
          link: ''
        }, {
          title: 'Muche',
          link: ''
        }, {
          title: 'Muche2',
          link: ''
        }, ];

    return {
      getPageLinks: function() {
        return pages;
      },

    };
  });

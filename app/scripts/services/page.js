'use strict';

angular.module('websiteApp')
  .factory('Page', function () {
    var pages = [{
          title: 'Staff',
          link: '1'
        }, {
          title: 'Truc',
          link: '2'
        }, {
          title: 'Publicité',
          link: '3'
        }, {
          title: 'Muche',
          link: '4'
        }, {
          title: 'Muche2',
          link: '5'
        }, ];

    return {
      getPageLinks: function() {
        return pages;
      },

    };
  });

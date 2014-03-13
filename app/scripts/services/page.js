'use strict';

angular.module('websiteApp')
    .factory('Page', function() {
        /*
          A page is : id, name, content.
        */
        var pages = [{
            title: 'Staff',
            link: 'Page?id=1'
        }, {
            title: 'Truc',
            link: 'Page?id=2'
        }, {
            title: 'Publicité',
            link: 'Page?id=3'
        }, {
            title: 'Muche',
            link: 'Page?id=4'
        }, {
            title: 'Muche2',
            link: 'Page?id=5'
        }, ];

        return {
            getPageLinks: function() {
                return pages;
            },

            getPage: function(id) {
                return '<p>Salut comment tu fais pour manger du <b>thon</b> id: ' +
                    id + ' ?</p>';
            },

        };
    });
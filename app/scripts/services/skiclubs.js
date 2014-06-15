'use strict';

angular.module('websiteApp')
    .factory('Skiclubs', function($http, Server) {
        var skiclubs = [{
            id: 1,
            title: 'Les Diablerets',
            latitude: 46.3514,
            longitude: 7.1581,
        }, {
            id: 2,
            title: 'Villars',
            latitude: 46.3000,
            longitude: 7.0500,
        }, {
            id: 3,
            title: 'Leysin',
            latitude: 46.3333,
            longitude: 7.0000,
        }, ];

        return {
            get: function(callback) {
                callback(skiclubs);
            },
        };
    });

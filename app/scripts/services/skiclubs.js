'use strict';

angular.module('websiteApp')
    .factory('Skiclubs', function($http, Server) {
        var scApi = Server.Url + 'apiv1/skiclubs/';

        return {
            get: function(callback) {
                $http.get(scApi)
                    .then(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },
        };
    });

'use strict';

angular.module('websiteApp')
    .factory('Skiclubs', ['$http', 'Server',
        function($http, Server) {
            var scApi = Server.Url + 'apiv1/skiclubs/';

            return {
                get: function(callback) {
                    $http.get(scApi, {
                        cache: true
                    })
                        .then(function(res) {
                            callback(res.data);
                        }, Server.errorHandler);
                },
            };
        }
    ]);

'use strict';

angular.module('websiteApp')
    .factory('Angulation', ['Server', '$http',
        function(Server, $http) {
            var ngApi = Server.Url + 'apiv1/angulation/';

            // Public API here
            return {
                getCovers: function(callback) {
                    var url = ngApi + 'covers/';
                    $http.get(url, {
                        cache: true
                    })
                        .then(function(res) {
                            callback(res.data);
                        }, Server.errorHandler);
                },
            };
        }
    ]);

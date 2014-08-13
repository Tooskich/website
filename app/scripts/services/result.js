'use strict';
/*
 * Results are for results from the FIS. Results of races.
 */
angular.module('websiteApp')
    .factory('Result', ['$http', 'Server',
        function($http, Server) {
            var racesApi = Server.Url + 'apiv1/races/';

            return {
                getResult: function(id, callback) {
                    var url = id ? racesApi + id + '/' : racesApi;
                    $http.get(url, {
                        cache: true
                    })
                        .then(function(res) {
                            res.data.date *= 1000;
                            callback(res.data);
                        }, Server.errorHandler);
                },

                getResultLists: function(page, category, callback) {
                    var url;
                    page = page || 1;
                    url = racesApi + 'cat/' + category + '/?page=' + page;
                    $http.get(url, {
                        cache: true
                    })
                        .then(function(res) {
                            var data = res.data.results.map(function(el) {
                                el.date = el.date * 1000;
                                return el;
                            });
                            callback(data);
                        }, Server.errorHandler);
                },
            };
        }
    ]);

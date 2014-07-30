'use strict';

angular.module('websiteApp')
    .factory('News', ['$http', 'Server',
        function($http, Server) {
            var newsApi = Server.Url + 'apiv1/news/',
                magApi = Server.Url + 'apiv1/mag/';

            // Public API here
            return {

                getNews: function(callback, id, page) {
                    var url = id ? newsApi + id + '/' : newsApi;
                    url = page ? url + '?page=' + page : url;
                    $http.get(url, {
                        cache: true
                    })
                        .then(function(res) {
                            var data = res.data.results ? res.data.results :
                                res.data;
                            callback(data);
                        });
                },

                getMagNews: function(callback, id, page) {
                    var url = id ? magApi + id + '/' : magApi;
                    url = page ? url + '?page=' + page : url;
                    $http.get(url)
                        .then(function(res) {
                            var data = res.data.results ? res.data.results :
                                res.data;
                            callback(data);
                        });
                },
            };
        }
    ]);

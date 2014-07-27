'use strict';

angular.module('websiteApp')
    .factory('Pub', ['$http', 'Server',
        function($http, Server) {
            var pubApi = Server.Url + 'apiv1/ads/';


            var shuffleArray = function shuffle(o) { //v1.0
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() *
                    i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };

            return {

                getCat: function(cat, callback) {
                    $http.get(pubApi + '?category=' + cat)
                        .then(function(res) {
                            var data = shuffleArray(res.data);
                            callback(data);
                        }, Server.errorHandler);
                },

                getVerticalBanner: function(callback) {
                    this.getCat('vertical', callback);
                },

                getHorizontalBanner: function(callback) {
                    this.getCat('horizontal', callback);
                },

                getSquareBanner: function(callback) {
                    this.getCat('square', callback);
                },

            };
        }
    ]);

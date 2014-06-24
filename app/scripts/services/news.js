'use strict';

angular.module('websiteApp')
    .factory('News', function($http, Server) {
        var loadNews, processNews, uniqueArray;
        var news = [],
            newsUrl = Server.Url + 'news/',
            newsApi = Server.Url + 'apiv1/news/';

        loadNews = function(callback, id) {
            var url = newsUrl + (id ? '?id=' + id : '');

            $http.get(url, {
                cache: 'true'
            })
                .success(function(response) {
                    var iter, filter;
                    var processed = Server.processResponse(response);
                    for (iter = 0; iter < processed.length; iter++) {
                        filter = news.some(function(el) {
                            return JSON.stringify(el) === JSON.stringify(
                                processed[iter]);
                        });
                        if (!filter) {
                            news.push(processed[iter]);
                        }
                    }
                    processed = processed.length > 1 ? processed :
                        processed[0];
                    callback(processed);
                })
                .error(Server.errorHandler);
        };

        // Public API here
        return {

            getNews: function(callback, id, page) {
                var url = id ? newsApi + id + '/' : newsApi;
                url = page ? url + '?page=' + page : url;
                $http.get(url)
                    .then(function(res) {
                        var data = res.data.results ? res.data.results :
                            res.data;
                        callback(data);
                    }, Server.errorHandler);
            },

            getMagNews: function(callback) {
                var mag;
                if (news.length > 0) {
                    mag = news.filter(function(cur) {
                        return cur.mag === 1;
                    });
                    mag = mag.length > 0 ? mag : [];
                    callback(mag);
                }
                else {
                    loadNews(function(response) {
                        mag = news.filter(function(cur) {
                            return cur.mag === 1;
                        });
                        mag = mag ? mag : [];
                        callback(mag);
                    });
                }
            },
        };
    });

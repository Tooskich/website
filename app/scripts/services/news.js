'use strict';

angular.module('websiteApp')
    .factory('News', function($http, Server) {
        var loadNews, processNews, uniqueArray;
        var news = [],
            newsUrl = Server.Url + 'news/';

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


        /*processNews = function(response) {
            var news = response.map(function(el) {
                var result = el.fields;
                result.id = el.pk;
                result.date = new Date(result.date)
                    .getTime();
                return result
            });
            return news;
        };*/

        // Public API here
        return {

            getNews: function(callback, id) {
                var current;
                if (id || angular.isNumber(id)) {
                    current = news.filter(function(el) {
                        return el.id === id;
                    })[0];
                    if (typeof current === 'undefined') {
                        loadNews(callback, id);
                    }
                    else {
                        callback(current);
                    }
                }
                else {
                    if (news.length > 0) {
                        callback(news);
                    }
                    else {
                        loadNews(callback);
                    }
                }
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
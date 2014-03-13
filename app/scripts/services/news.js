'use strict';

angular.module('websiteApp')
    .factory('News', function($http) {
        var news = [];
        var loadNews, processNews;

        loadNews = function(callback, id) {

            $http.get(
                document.api, {
                    cache: 'true'
                }
            )
                .success(function(response) {
                    var processed = processNews(response);
                    news.concat(processed);
                    callback(processed);
                })
                .error(function(status, response) {
                    alert(
                        'There was a connection problem with the server.'
                    );
                });
        };


        processNews = function(response) {
            var news = response.map(function(el) {
                var result = el.fields;
                result.id = el.pk;
                return result
            });
            return news;
        };

        // Public API here
        return {

            getNews: function(callback, id) {
                var current;
                if (id || angular.isNumber(id)) {
                    current = news.filter(function(el) {
                        return el.id === id;
                    })[0];
                    if (typeof current === 'undefined') {
                        loadNews(callback);
                    }
                }
                else {
                    if (news.length > 0) {
                        return news;
                    }
                    else {
                        loadNews(callback, id);
                    }
                    return news;
                }
            },

            getMagNews: function() {
                return news.filter(function(cur) {
                    return cur.mag === 1;
                });
            },
        };
    });
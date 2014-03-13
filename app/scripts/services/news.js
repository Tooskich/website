'use strict';

angular.module('websiteApp')
    .factory('News', function($http) {
        var loadNews, processNews;
        var news = [],
            newsUrl = document.api + 'news/';

        loadNews = function(callback, id) {
            var url = newsUrl + (id ? '?id=' + id : '');

            $http.get(url, {
                cache: 'true'
            })
                .success(function(response) {
                    var processed = processNews(response);
                    news = news.concat(processed);
                    processed = processed.length > 1 ? processed :
                        processed[0];
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
                result.date = new Date(result.date)
                    .getTime();
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
                        loadNews(callback, id);
                    }
                    else {
                        callback(current);
                    }
                }
                else {
                    if (news.length > 0) {
                        return news;
                    }
                    else {
                        loadNews(callback);
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
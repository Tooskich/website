'use strict';

angular.module('websiteApp')
    .factory('News', function($http) {
        var news = [],
            that = this;

        window.JSON_CALLBACK = function(response) {

            debugger;
            that.news = response.map(function(el) {
                var result = el.fields;
                result.id = el.pk;
                return result
            });
        };

        $http.get(
            'http://tooski.webfactional.com/api/news/get?callback', {
                cache: 'true'
            }
        )
            .success(function(response) {
                debugger;
                that.news = response.map(function(el) {
                    var result = el.fields;
                    result.id = el.pk;
                    return result
                });
            })
        // .error(function(status, response) {
        //     debugger;
        //     alert('Wrong connection with the server...');
        // });


        // Public API here
        return {
            getNews: function(id) {
                if (id || angular.isNumber(id)) {
                    return news.filter(function(el) {
                        return el.id === id;
                    })[0];
                }
                else {
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
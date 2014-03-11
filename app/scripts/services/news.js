'use strict';

angular.module('websiteApp')
    .factory('News', function($http) {
        var news = [];

        $http.get(
            document.api, {
                cache: 'true'
            }
        )
            .success(function(response) {
                news = response.map(function(el) {
                    var result = el.fields;
                    result.id = el.pk;
                    return result
                });
            })
            .error(function(status, response) {
                alert('There was a connection problem with the server.');
            })
            .then(function(t) {
                /*
                 * Here we'll call the call back that will be defined in the controller, 
                 so that the data will be available to him.
                 */
                console.log(t, news);
            });


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
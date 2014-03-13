'use strict';

angular.module('websiteApp')
    .factory('Page', function($http, Server) {

        var pages = [];

        /*
          A page is : id, name, content.
        */

        var pageUrl = Server.Url + 'pages/';
        var loadPages, returnPage;

        loadPages = function(callback) {
            $http.get(pageUrl, {
                cache: 'true'
            })
                .success(function(response) {
                    var iter, filter;
                    var processed = Server.processResponse(response);
                    for (iter = 0; iter < processed.length; iter++) {
                        filter = pages.some(function(el) {
                            return JSON.stringify(el) === JSON.stringify(
                                processed[iter]);
                        });
                        if (!filter) {
                            pages.push(processed[iter]);
                        }
                    }
                    callback(pages);
                })
                .error(Server.errorHandler);
        };

        returnPage = function(callback, id) {
            if (pages.length < 1) {
                loadPages(function() {
                    returnPage(callback, id);
                });
            }
            else {
                var page = pages.filter(function(el) {
                    return el.id === +id;
                })[0];
                page = page ? page.content : '';
                callback(page);
            }
        };

        return {
            getPageLinks: function(callback) {
                if (pages.length < 1) {
                    loadPages(function(result) {
                        var test = result.map(function(el) {
                            el.link = 'Page?id=' + el.id;
                            el.title = el.name;
                            return el;
                        });
                        callback(test);
                    });
                }
                else {
                    callback(pages.map(function(el) {
                        el.link = 'Page?id=' + el.id;
                        el.title = el.name;
                        return el;
                    }));
                }
            },

            getPage: function(callback, id) {
                return returnPage(callback, id);
            },

        };
    });
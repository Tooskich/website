'use strict';

angular.module('websiteApp')
    .factory('Page', function($http, Server) {
        /* A page is : id, name, content. */
        var pageUrl = Server.Url + 'pages/',
            pages = [];
        var loadPages;

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

        return {
            getPageLinks: function(callback) {
                /* Should return .link and .title for each page.*/
                var getPageLinks;
                if (pages.length < 1) {
                    getPageLinks = this.getPageLinks;
                    loadPages(function(result) {
                        getPageLinks(callback);
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
                var getPage;
                if (pages.length < 1) {
                    getPage = this.getPage;
                    loadPages(function() {
                        getPage(callback, id);
                    });
                }
                else {
                    var page = pages.filter(function(el) {
                        return el.id === +id;
                    })[0];
                    page = page ? page.content : '';
                    callback(page);
                }
            },

        };
    });
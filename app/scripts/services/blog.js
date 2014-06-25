'use strict';

angular.module('websiteApp')
    .factory('Blog', function($http, Server) {
        var blogApi = Server.Url + 'apiv1/bloggers/',
            splitSymbol = '|',
            unNestBloggerImages;

        unNestBloggerImages = function(blogger) {
            blogger.sponsors = blogger.sponsors.split(
                splitSymbol);
            blogger.ad = blogger.ad.split(splitSymbol);
            return blogger;
        };

        // Public API here
        return {
            getBlogger: function(callback, id) {
                var url = id ? blogApi + id + '/' : blogApi;
                $http.get(url)
                    .then(function(res) {
                        var i,
                            data = res.data;
                        if (!(data instanceof Array)) {
                            data = unNestBloggerImages(data);
                        }
                        else {
                            for (i = 0; i < data.length; i++) {
                                data[i] = unNestBloggerImages(data[i]);
                            }
                        }
                        callback(data);
                    }, Server.errorHandler);
            },

            getBlogLinks: function(callback) {
                this.getBlogger(function(bloggers) {
                    var links = bloggers.map(function(el) {
                        el.title = el.name,
                        el.link = 'Blog?id=' + el.id;
                        return el;
                    });
                    callback(links);
                });
            },

            getNews: function(callback, id) {
                $http.get(blogApi + id + '/posts/')
                    .then(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },

        };
    });

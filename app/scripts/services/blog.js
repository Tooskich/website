'use strict';

angular.module('websiteApp')
    .factory('Blog', function($http, Server) {

        var loadBloggers, loadBlogPosts;
        var blogsUrl = Server.Url + 'blogs/',
            blogs = [],
            posts = [];

        loadBloggers = function(callback, id) {
            var url = blogsUrl + (id ? '?id=' + id : '');
            $http.get(url, {
                cache: 'true'
            })
                .success(function(response) {
                    var iter, filter;
                    var processed = Server.processResponse(response);
                    processed = processed.map(function(el) {
                        el.ad = el.ad.split('|');
                        el.sponsors = el.sponsors.split('|');
                        return el;
                    });

                    for (iter = 0; iter < processed.length; iter++) {
                        filter = blogs.some(function(el) {
                            return JSON.stringify(el) === JSON.stringify(
                                processed[iter]);
                        });
                        if (!filter) {
                            blogs.push(processed[iter]);
                        }
                    }
                    processed = processed.length > 1 ? processed :
                        processed[0];
                    callback(processed);
                })
                .error(Server.errorHandler);
        };

        loadBlogPosts = function(callback, id) {
            var url = blogsUrl + 'posts/';
            $http.get(url, {
                cache: 'true'
            })
                .success(function(response) {
                    var iter, filter;
                    var processed = Server.processResponse(response);

                    for (iter = 0; iter < processed.length; iter++) {
                        filter = posts.some(function(el) {
                            return JSON.stringify(el) === JSON.stringify(
                                processed[iter]);
                        });
                        if (!filter) {
                            posts.push(processed[iter]);
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
            getBlogger: function(callback, id) {
                var getBlogger;
                if (blogs.length < 1) {
                    getBlogger = this.getBlogger;
                    loadBloggers(function() {
                        getBlogger(callback, id);
                    });
                }
                else {
                    var blogger = blogs.filter(function(el) {
                        return el.id === parseInt(id);
                    });
                    debugger;
                    blogger = blogger[0] ? blogger[0] : {};
                    callback(blogger);
                }
            },

            getBlogLinks: function(callback) {
                var getBlogLinks;
                if (blogs.length < 1) {
                    getBlogLinks = this.getBlogLinks;
                    loadBloggers(function() {
                        getBlogLinks(callback);
                    });
                }
                else {
                    callback(blogs.map(function(el) {
                        el.title = el.name,
                        el.link = 'Blog?id=' + el.id;
                        return el;
                    }));
                }
            },

            getNews: function(callback, id) {
                var getNews;
                if (posts.length < 1) {
                    getNews = this.getNews;
                    loadBlogPosts(function() {
                        getNews(callback, id);
                    });
                }
                else {
                    callback(posts.filter(function(el) {
                        return el.blogId === parseInt(id);
                    }));
                }
            },

        };
    });
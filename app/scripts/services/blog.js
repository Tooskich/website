'use strict';

angular.module('websiteApp')
    .factory('Blog', function($http, Server) {

        var loadBloggers;
        var blogsUrl = Server.Url + 'blogs/',
            blogs = [];

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

            getNews: function(id) {
                return [{
                    id: 0,
                    author: 'Séb',
                    title: 'News n°0',
                    content: 'Mon super text, avec du html: <img src="http://www.google.ch/logos/doodles/2014/annette-von-droste-hulshoffs-217th-birthday-5701007384248320.2-hp.jpg" /><a href="http://tooski.ch"></a>',
                    date: 1389390694,
                }, {
                    id: 1,
                    author: 'Séb',
                    title: 'News n°1',
                    content: 'Mon super text, avec du html: <img src="http://www.fricktal24.ch/typo3temp/pics/Ski-Aerni_Luca_01_55d138efee.jpg" /><a href="http://tooski.ch"></a>',
                    date: 1389390695,
                }, {
                    id: 2,
                    author: 'Séb',
                    title: 'News n°2',
                    content: 'Mon super text, avec du html: <a href="https://tooski.ch"><img src="http://skiweltcup.tv/wp-content/themes/tvsportnews/images/09-aerni002-klein-swiss-ski.jpg" /></a>',
                    date: 1389390696,
                }, ];
            },

        };
    });
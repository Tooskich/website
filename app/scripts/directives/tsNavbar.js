'use strict';

angular.module('websiteApp')
    .directive('tsNavbar', ['$window', 'Blog', 'Page', 'Ranking', 'Pub',
        function($window, Blog, Page, Ranking, Pub) {
            return {
                templateUrl: 'views/directives/core/navbar.html',
                restrict: 'EACM',
                replace: true,
                link: function postLink(scope, element, attrs) {

                    var shuffleArray = function shuffle(o) { //v1.0
                        for (var j, x, i = o.length; i; j = Math.floor(
                            Math
                            .random() *
                            i), x = o[--i], o[i] = o[j], o[j] = x);
                        return o;
                    };

                    scope.resultsCat = {};
                    scope.resultsCat.cat = Ranking.getRankingLinks();
                    scope.resultsCat.name = 'Résultats';

                    Blog.getBlogLinks(function(links) {
                        scope.blogsCat = {};
                        scope.blogsCat.cat = links;
                        scope.blogsCat.name = 'Blogs';
                    });

                    // Page.getPageLinks(function(links) {
                    //     scope.pagesCat = {};
                    //     scope.pagesCat.cat = links;
                    //     scope.pagesCat.name = 'Tooski';
                    // });

                    Pub.getHorizontalBanner(function(banners) {
                        scope.banner = shuffleArray(banners)[0];
                    });

                    Pub.getVerticalBanner(function(banners) {
                        debugger;
                    });

                    scope.isCollapsed = true;

                    scope.resetSubMenu = function(name) {
                        scope.revealPills(null, {
                            cat: [{
                                link: '',
                                title: '<img src="images/icons/back-arrow.png" class="icon" style="max-height:22px;margin:0px;padding:0px;" ng-click="$window.history.back()" />',
                            }],
                            name: name,
                        });
                    };

                    scope.selectNav = function(id) {
                        scope.activeCat = id;
                    };

                    scope.selectSubCat = function(id) {
                        scope.activeSubCat = id;
                    };

                    scope.revealPills = function(id, cat) {
                        var pillsNav = document.getElementById(
                            'ts-nav-subbar');
                        scope.selectNav(id);
                        scope.currentCat = cat;
                        pillsNav.style.display = cat === null ? 'none' :
                            'block';
                    };
                }
            };
        }
    ]);

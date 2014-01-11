'use strict';

angular.module('websiteApp')
  .directive('tsNavbar', function(Blog, Page) {
    return {
      templateUrl: 'views/directives/core/navbar.html',
      restrict: 'EACM',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.resultsCat = [{
          title: 'Coupe du Monde',
          link: 'Ranking?type=WC'
        }, {
          title: 'Coupe d\'Europe',
          link: 'Ranking?type=EC'
        }, {
          title: 'FIS',
          link: 'Ranking?type=FIS'
        }, ];

        scope.blogsCat = Blog.getBlogLinks();

        scope.pagesCat = Page.getPageLinks();


        scope.selectNav = function(id) {
          scope.activeCat = id;
        };

        scope.selectSubCat = function(id) {
          scope.activeSubCat = id;
        };

        scope.revealPills = function(id, cat) {
          var pillsNav = document.getElementById('ts-nav-subbar');
          scope.selectNav(id);
          scope.currentCat = cat;
          pillsNav.style.display = cat === null ? 'none': 'block';
        };
      }
    };
  });
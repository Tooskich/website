'use strict';

angular.module('websiteApp')
  .directive('tsNavbar', function(Blog) {
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

        scope.blogsCat = Blog.getBlogNames();

        scope.pagesCat = [{
          title: 'Staff',
          link: ''
        }, {
          title: 'Truc',
          link: ''
        }, {
          title: 'Publicité',
          link: ''
        }, {
          title: 'Muche',
          link: ''
        }, {
          title: 'Muche2',
          link: ''
        }, ];


        scope.selectNav = function(id) {
          scope.activeCat = id;
        };

        scope.revealPills = function(id, cat) {
          var pillsNav = document.getElementById('ts-nav-subbar');
          scope.selectNav(id);
          if (cat === null) {
            pillsNav.style.display = 'none';
            return true;
          }
          scope.currentCat = cat;
          pillsNav.style.display = 'block';
        };
      }
    };
  });
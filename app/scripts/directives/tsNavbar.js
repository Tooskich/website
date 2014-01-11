'use strict';

angular.module('websiteApp')
  .directive('tsNavbar', function() {
    return {
      templateUrl: 'views/directives/core/navbar.html',
      restrict: 'EACM',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.resultsCat = [{
          title: 'Coupe du Monde',
          link: ''
        }, {
          title: 'Coupe d\'Europe',
          link: ''
        }, {
          title: 'FIS',
          link: ''
        }, ];

        scope.blogsCat = [{
          title: 'Antoine Perrottet',
          link: ''
        }, {
          title: 'Axel Béguelin',
          link: ''
        }, {
          title: 'Un autre Skieur',
          link: ''
        }, ];

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
        scope.activeCat = 1;

        scope.revealPills = function(id, cat) {
          var iter,
            pillsNav = document.getElementById('ts-nav-subbar'),
            pillsList = document.getElementById('ts-nav-subbar-list');
          scope.selectNav(id);
          pillsList.innerHTML = '';
          if (cat === null) {
            pillsNav.style.display = 'none';
            return true;
          }
          for (iter = 0; iter < cat.length; iter++) {
            pillsList.innerHTML += '<li><a style="padding:5px;" ng-href="' + cat[iter].link + '">' + cat[iter].title + '</a></li>';
          }
          pillsNav.style.display = 'block';
        };
      }
    };
  });
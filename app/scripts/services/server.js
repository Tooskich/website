'use strict';

angular.module('websiteApp')
    .service('Server', ['$window', '$location',
        function Server($window, $location) {
            // AngularJS will instantiate a singleton by calling "new" on this function

            this.Url = 'http://tooski.webfactional.com/api/';

            this.sendAnalytics = function() {
                $window.ga('send', 'pageview', {
                    page: $location.path()
                });
            };

            this.processResponse = function(response) {
                return response.map(function(el) {
                    var result = el.fields;
                    result.id = el.pk;
                    result.date = new Date(result.date)
                        .getTime();
                    return result;
                });
            };

            this.errorHandler = function(status, response) {
                console.log(
                    'There was a connection problem with the server. (' +
                    status + ')'
                );
            }
        }
    ]);

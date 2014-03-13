'use strict';

angular.module('websiteApp')
    .service('Server', function Server() {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.ServerUrl = 'http://127.0.0.1:8000/';

        this.processResponse = function(response) {
            return response.map(function(el) {
                var result = el.fields;
                result.id = el.pk;
                result.date = new Date(result.date)
                    .getTime();
                return result
            });
        };
    });
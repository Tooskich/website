'use strict';

angular.module('websiteApp')
    .service('Server', function Server() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.ServerUrl = 'http://127.0.0.1:8000/';

        this.processResponse = function() {

        };
    });
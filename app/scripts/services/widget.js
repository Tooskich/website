'use strict';

angular.module('websiteApp')
    .factory('Widget', function($http, Server) {
        var widgetUrl = Server.Url + 'widgets/',
            widgetApi = Server.Url + 'apiv1/widgets/';

        return {
            get: function(id, callback) {
                var url = widgetApi + id + '/';
                $http.get(url)
                    .then(function(res) {
                        callback(res.data.content);
                    }, Server.errorHandler);
            },
        };
    });

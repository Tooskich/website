'use strict';

angular.module('websiteApp')
    .factory('Widget', function($http, Server) {
        var widgetUrl = Server.Url + '';

        var data =
            '<img src="http://www.tooski.ch/assets/uploads/files/asdfangulation4.jpg">' +
            '<div class="pull-right">' +
            '<strong><small>Vous ne connaissez pas notre magazine ?</small></strong>' +
            '<strong><small>Demandez-nous un exemplaire gratuit...</small></strong><br />' +
            '<a href="mailto:angulation@tooski.ch"><span class="red">Angulation@tooski.ch</span></a>' +
            '</div>';

        return {
            get: function(callback) {
                callback(data);
            },
        };
    });

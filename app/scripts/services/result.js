'use strict';
/*
 * Results are for results from the FIS. Results of races.
 */
angular.module('websiteApp')
    .factory('Result', function($http, Server) {
        var racesApi = Server.Url + 'apiv1/races/';

    // var result = {
    //     headers: ['Place', 'Nom', 'Points', 'Temps'],
    //     values: [
    //         ['1', 'Pinturault', '1.00', '1.34'],
    //         ['2', 'Pinturault', '2.00', '2.34'],
    //         ['3', 'Pinturault', '3.00', '3.34'],
    //         ['4', 'Pinturault', '4.00', '4.34'],
    //         ['5', 'Pinturault', '5.00', '5.34'],
    //         ['6', 'Pinturault', '6.00', '6.34'],
    //         ['7', 'Pinturault', '7.00', '7.34'],
    //         ['8', 'Pinturault', '8.00', '8.34'],
    //         ['9', 'Pinturault', '9.00', '9.34'],
    //         ['10', 'Pinturault', '10.00', '10.34'],
    //         ['11', 'Pinturault', '11.00', '11.34'],
    //         ['12', 'Pinturault', '12.00', '12.34'],
    //         ['13', 'Pinturault', '13.00', '13.34'],
    //         ['14', 'Pinturault', '14.00', '14.34'],
    //         ['15', 'Pinturault', '15.00', '15.34'],
    //         ['16', 'Pinturault', '16.00', '16.34'],
    //         ['17', 'Pinturault', '17.00', '17.34'],
    //         ['18', 'Pinturault', '18.00', '18.34'],
    //     ],
    //     title: 'SL Alta Badia',
    //     date: 1388476529,
    //     category: 'WC',
    //     genre: 'H',
    //     id: 0,
    // };

        return {
            getResult: function(id, callback) {
                var url = id ? racesApi + id + '/' : racesApi;
                $http.get(url)
                    .then(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);
            },

            getResultLists: function(category, callback) {
                var url = racesApi + 'cat/' + category + '/';
                $http.get(url)
                    .then(function(res) {
                        callback(res.data);
                    }, Server.errorHandler);

                // var iter,
                //     array = [];
                // for (iter = 0; iter <= 10; iter++) {
                //     result.id = iter;
                //     array.push(result);
                // }
                // return array;
            },
        };
    });

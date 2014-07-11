'use strict';

angular.module('websiteApp')
    .factory('Angulation', function(Server, $http) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            getCovers: function(callback) {
                callback([
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                    'http://res.cloudinary.com/tooski/image/upload/v1405091228/j3lvvd2rc5ykd52utsdx.png',
                ]);
            }
        };
    });

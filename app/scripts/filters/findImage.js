'use strict';

angular.module('websiteApp')
    .filter('findImage', [

        function() {
            /*
             * input: the html fro which to extract the image url
             * thumb: wether to resize the image for thumb news, yes or no.
             */
            var width = screen.width > 1200 ? 650 : screen.width > 992 ?
                500 :
                screen.width > 550 ? 1800 : 700,
                thumbHeight = 280,
                carouselHeight = 600,
                defaultImage = '/images/site/tooski_bordered.png';
            return function(input, thumb, carousel) {
                var id, start,
                    re =
                    /(https?:\/\/[A-Za-z0-9_/\.\-\(\)]*\.(?:png|jpg|svg|jpeg))/gi;
                input = re.exec(input);
                input = !!input ? input[0] : defaultImage;
                re = /res.cloudinary.com/gi;
                if ((!thumb && !carousel) || !re.test(input)) {
                    return input;
                }
                start = input.substring(0, input.lastIndexOf('upload/') +
                    7);
                id = input.substr(input.lastIndexOf('/'));
                if (thumb) {
                    return start + 'w_' + width + ',h_' + thumbHeight +
                        ',c_thumb,g_face' + id;
                }
                return start + 'w_' + (2 * width) + ',h_' +
                    carouselHeight +
                    ',c_thumb,g_face' + id;
            };
        }
    ]);

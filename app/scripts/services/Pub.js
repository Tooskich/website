'use strict';

angular.module('websiteApp')
  .factory('Pub', function() {
    var banners = [{
      id: 0,
      horizontal: 0,
      vertical: 1,
      square: 0,
      img: 'http://placehold.it/350x750',
    }, {
      id: 0,
      horizontal: 0,
      vertical: 0,
      square: 1,
      img: 'http://placehold.it/350x350',
    }, {
      id: 0,
      horizontal: 0,
      vertical: 0,
      square: 1,
      img: 'http://placehold.it/750x750',
    }, {
      id: 0,
      horizontal: 1,
      vertical: 0,
      square: 0,
      img: 'http://placehold.it/750x350',
    }, ];


    var shuffleArray = function shuffle(o) { //v1.0
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };

    banners = shuffleArray(banners);

    return {
      getVerticalBanner: function() {
        return banners.filter(function(el) {
          return el.vertical === 1;
        }).reduce(function(prev, cur) {
          prev.push(cur.img);
          return prev;
        }, []);
      },

      getSquareBanner: function() {
        return banners.filter(function(el) {
          return el.square === 1;
        }).reduce(function(prev, cur) {
          prev.push(cur.img);
          return prev;
        }, []);
      },
    };
  });
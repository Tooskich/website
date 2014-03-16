"use strict";angular.module("websiteApp",["ngCookies","ngResource","ngSanitize","ui.bootstrap","ngDisqus"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/index.html",controller:"MainCtrl"}).when("/Mag",{templateUrl:"views/index.html",controller:"MagCtrl"}).when("/News",{templateUrl:"views/news.html",controller:"NewsCtrl"}).when("/Rankings",{templateUrl:"views/rankings.html",controller:"RankingsCtrl"}).when("/Blog",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/Page",{templateUrl:"views/page.html",controller:"PageCtrl"}).when("/Result",{templateUrl:"views/result.html",controller:"ResultCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!1).hashPrefix("!")}]),angular.module("websiteApp").controller("MainCtrl",["$scope","$routeParams","$modal","News",function(a,b,c,d){function e(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}var f=[];d.getNews(function(b){f=b,a.news=f,a.randFirstNews=e(f.slice(0,5))}),(parseInt(b.n)||"0"===b.n)&&c.open({templateUrl:"news-modal.html",controller:["$scope","$routeParams","$modalInstance","News",function(a,b,c,d){var e=parseInt(b.n);d.getNews(function(b){f=b,a.news=f,a.disqusId="News"+e,a.close=function(){c.close()}},e)}]})}]),angular.module("websiteApp").controller("MagCtrl",["$scope","News",function(a,b){function c(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}var d=[];b.getMagNews(function(b){d=b,a.news=d,a.randFirstNews=c(d.slice(0,5))})}]),angular.module("websiteApp").directive("tsNewsList",function(){return{templateUrl:"views/directives/news/newslist.html",restrict:"EACM",replace:!0,scope:{news:"=news"},link:function(){}}}),angular.module("websiteApp").filter("truncate",function(){return function(a,b,c){return isNaN(b)&&(b=10),void 0===c&&(c="..."),a.length<=b||a.length-c.length<=b?a:String(a).substring(0,b-c.length)+c}}),angular.module("websiteApp").filter("findImage",function(){return function(a){var b=/(https?:\/\/[A-Za-z0-9_/\.\-\(\)]*\.(?:png|jpg|svg|jpeg))/gi;return a=b.exec(a),a=a?a[0]:"/images/site/Sflocon_vecteur_Transparent.png"}}),angular.module("websiteApp").directive("tsNewsCarousel",function(){return{templateUrl:"views/directives/news/carousel.html",restrict:"EACM",scope:{news:"="},link:function(a){a.interval=5e3}}}),angular.module("websiteApp").controller("NewsCtrl",["$scope","$routeParams","News",function(a,b,c){var d=b.id;a.news=c.getNews(d),a.disqusId="News"+d}]),angular.module("websiteApp").directive("tsPubSide",["Pub",function(a){return{templateUrl:"views/directives/pub/side.html",restrict:"EACM",link:function(b){var c=a.getVerticalBanner(),d=a.getSquareBanner();b.vertical=c[0],b.square1=d[0],b.square2=d.length>1?d[1]:d[0]}}}]),angular.module("websiteApp").directive("tsComments",function(){return window.disqus_shortname="tooski",{templateUrl:"views/directives/comments/comments.html",restrict:"EACM",link:function(){}}}),angular.module("websiteApp").factory("News",["$http","Server",function(a,b){var c,d=[],e=b.Url+"news/";return c=function(c,f){var g=e+(f?"?id="+f:"");a.get(g,{cache:"true"}).success(function(a){var e,f,g=b.processResponse(a);for(e=0;e<g.length;e++)f=d.some(function(a){return JSON.stringify(a)===JSON.stringify(g[e])}),f||d.push(g[e]);g=g.length>1?g:g[0],c(g)}).error(b.errorHandler)},{getNews:function(a,b){var e;b||angular.isNumber(b)?(e=d.filter(function(a){return a.id===b})[0],"undefined"==typeof e?c(a,b):a(e)):d.length>0?a(d):c(a)},getMagNews:function(a){var b;d.length>0?(b=d.filter(function(a){return 1===a.mag}),b=b.length>0?b:[],a(b)):c(function(){b=d.filter(function(a){return 1===a.mag}),b=b?b:[],a(b)})}}}]),angular.module("websiteApp").directive("tsNavbar",["Blog","Page","Ranking",function(a,b,c){return{templateUrl:"views/directives/core/navbar.html",restrict:"EACM",replace:!0,link:function(d){d.resultsCat=c.getRankingLinks(),a.getBlogLinks(function(a){d.blogsCat=a}),b.getPageLinks(function(a){d.pagesCat=a}),d.isCollapsed=!0,d.selectNav=function(a){d.activeCat=a},d.selectSubCat=function(a){d.activeSubCat=a},d.revealPills=function(a,b){var c=document.getElementById("ts-nav-subbar");d.selectNav(a),d.currentCat=b,c.style.display=null===b?"none":"block"}}}}]),angular.module("websiteApp").factory("Pub",function(){var a=[{id:0,horizontal:0,vertical:1,square:0,img:"http://placehold.it/350x750"},{id:0,horizontal:0,vertical:0,square:1,img:"http://placehold.it/350x350"},{id:0,horizontal:0,vertical:0,square:1,img:"http://placehold.it/750x750"},{id:0,horizontal:1,vertical:0,square:0,img:"http://placehold.it/750x350"}],b=function(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a};return a=b(a),{getVerticalBanner:function(){return a.filter(function(a){return 1===a.vertical}).reduce(function(a,b){return a.push(b.img),a},[])},getSquareBanner:function(){return a.filter(function(a){return 1===a.square}).reduce(function(a,b){return a.push(b.img),a},[])}}}),angular.module("websiteApp").factory("Blog",["$http","Server",function(a,b){var c,d,e=b.Url+"blogs/",f=[],g=[];return c=function(c,d){var g=e+(d?"?id="+d:"");a.get(g,{cache:"true"}).success(function(a){var d,e,g=b.processResponse(a);for(g=g.map(function(a){return a.ad=a.ad.split("|"),a.sponsors=a.sponsors.split("|"),a}),d=0;d<g.length;d++)e=f.some(function(a){return JSON.stringify(a)===JSON.stringify(g[d])}),e||f.push(g[d]);g=g.length>1?g:g[0],c(g)}).error(b.errorHandler)},d=function(c){var d=e+"posts/";a.get(d,{cache:"true"}).success(function(a){var d,e,f=b.processResponse(a);for(d=0;d<f.length;d++)e=g.some(function(a){return JSON.stringify(a)===JSON.stringify(f[d])}),e||g.push(f[d]);f=f.length>1?f:f[0],c(f)}).error(b.errorHandler)},{getBlogger:function(a,b){var d;if(f.length<1)d=this.getBlogger,c(function(){d(a,b)});else{var e=f.filter(function(a){return a.id===parseInt(b)});e=e[0]?e[0]:{},a(e)}},getBlogLinks:function(a){var b;f.length<1?(b=this.getBlogLinks,c(function(){b(a)})):a(f.map(function(a){return a.title=a.name,a.link="Blog?id="+a.id,a}))},getNews:function(a,b){var c;g.length<1?(c=this.getNews,d(function(){c(a,b)})):a(g.filter(function(a){return a.blogId===parseInt(b)}))}}}]),angular.module("websiteApp").controller("RankingsCtrl",["$scope","$routeParams","Ranking","Result",function(a,b,c,d){var e=b.type;a.rankings=d.getResultLists(e),a.generalMen=c.getGeneralRanking(e,"H"),a.generalWomen=c.getGeneralRanking(e,"F")}]),angular.module("websiteApp").controller("BlogCtrl",["$scope","$routeParams","Blog",function(a,b,c){var d=b.id;a.blogId=d,c.getNews(function(b){a.news=b},d),c.getBlogger(function(b){a.blogger=b},d)}]),angular.module("websiteApp").factory("Page",["$http","Server",function(a,b){var c,d=b.Url+"pages/",e=[];return c=function(c){a.get(d,{cache:"true"}).success(function(a){var d,f,g=b.processResponse(a);for(d=0;d<g.length;d++)f=e.some(function(a){return JSON.stringify(a)===JSON.stringify(g[d])}),f||e.push(g[d]);c(e)}).error(b.errorHandler)},{getPageLinks:function(a){var b;e.length<1?(b=this.getPageLinks,c(function(){b(a)})):a(e.map(function(a){return a.link="Page?id="+a.id,a.title=a.name,a}))},getPage:function(a,b){var d;if(e.length<1)d=this.getPage,c(function(){d(a,b)});else{var f=e.filter(function(a){return a.id===+b})[0];f=f?f.content:"",a(f)}}}}]),angular.module("websiteApp").factory("Ranking",function(){var a=[{title:"Coupe du Monde",link:"Rankings?type=WC"},{title:"Coupe d'Europe",link:"Rankings?type=EC"},{title:"FIS",link:"Rankings?type=FIS"}],b={men:[{name:"Marcel Hirscher",points:256},{name:"Aksel Lund Svindal",points:255},{name:"Ted Ligety",points:254}],women:[{name:"Lara Gut",points:256},{name:"Anna Fenninger",points:255},{name:"Michel Gisin",points:254}]};return{getRankingLinks:function(){return a},getGeneralRanking:function(a,c){return"F"===c?b.women:b.men}}}),angular.module("websiteApp").controller("PageCtrl",["$scope","$routeParams","Page",function(a,b,c){c.getPage(function(b){a.page=b},b.id)}]),angular.module("websiteApp").directive("tsBlogSponsors",["Blog",function(){return{templateUrl:"views/directives/blog/sponsors.html",restrict:"EACM",scope:{sponsors:"=sponsors"},link:function(){}}}]),angular.module("websiteApp").controller("ResultCtrl",["$scope","$routeParams","Result",function(a,b,c){var d=b.resultId,e=c.getResult(d);a.headers=e.headers,a.results=e.values,a.title=e.title,a.date=e.date,a.genre=e.genre}]),angular.module("websiteApp").directive("tsRankingGeneral",function(){return{templateUrl:"views/directives/ranking/general.html",restrict:"EACM",scope:{generalRanking:"=ranking"},link:function(){}}}),angular.module("websiteApp").factory("Result",function(){var a={headers:["Place","Nom","Points","Temps"],values:[["1","Pinturault","1.00","1.34"],["2","Pinturault","2.00","2.34"],["3","Pinturault","3.00","3.34"],["4","Pinturault","4.00","4.34"],["5","Pinturault","5.00","5.34"],["6","Pinturault","6.00","6.34"],["7","Pinturault","7.00","7.34"],["8","Pinturault","8.00","8.34"],["9","Pinturault","9.00","9.34"],["10","Pinturault","10.00","10.34"],["11","Pinturault","11.00","11.34"],["12","Pinturault","12.00","12.34"],["13","Pinturault","13.00","13.34"],["14","Pinturault","14.00","14.34"],["15","Pinturault","15.00","15.34"],["16","Pinturault","16.00","16.34"],["17","Pinturault","17.00","17.34"],["18","Pinturault","18.00","18.34"]],title:"SL Alta Badia",date:1388476529,category:"WC",genre:"H",id:0};return{getResult:function(){return a},getResultLists:function(){var b,c=[];for(b=0;10>=b;b++)a.id=b,c.push(a);return c}}}),angular.module("websiteApp").service("Server",function(){this.Url="http://127.0.0.1:8000/",this.processResponse=function(a){return a.map(function(a){var b=a.fields;return b.id=a.pk,b.date=new Date(b.date).getTime(),b})},this.errorHandler=function(a){alert("There was a connection problem with the server. ("+a+")")}});
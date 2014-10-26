"use strict";angular.module("websiteApp",["ngRoute","ngTouch","ngAnimate","ngCookies","ngResource","ngSanitize","ui.bootstrap","ngDisqus","bootstrapLightbox","google-maps"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/index.html",controller:"MainCtrl"}).when("/Mag",{templateUrl:"views/index.html",controller:"MagCtrl"}).when("/News",{templateUrl:"views/news.html",controller:"NewsCtrl"}).when("/Rankings",{templateUrl:"views/rankings.html",controller:"RankingsCtrl"}).when("/Blog",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/Page",{templateUrl:"views/page.html",controller:"PageCtrl"}).when("/Result",{templateUrl:"views/result.html",controller:"ResultCtrl"}).when("/Skiclubs",{templateUrl:"views/skiclubs.html",controller:"SkiclubsCtrl"}).when("/Shop",{templateUrl:"views/shop.html",controller:"ShopCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!1).hashPrefix("!")}]),angular.module("websiteApp").controller("MainCtrl",["$scope","$routeParams","News",function(a,b,c){function d(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}a.latestNews=[],a.$watch("page",function(b){c.getNews(function(d){c.getNews(function(b){a.latestNews=d.concat(b)},null,b+2)},null,b+1)}),a.page=1,a.loadPage=function(b){c.getNews(function(c){a.page=b,a.news=c,a.randFirstNews=d(c.slice(0,5))},null,b)},a.loadPage(a.page)}]),angular.module("websiteApp").controller("MagCtrl",["$scope","News",function(a,b){function c(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}a.latestNews=[],a.$watch("page",function(c){b.getMagNews(function(d){b.getMagNews(function(b){a.latestNews=d.concat(b)},null,c+2)},null,c+1)}),a.page=1,a.loadPage=function(d){b.getMagNews(function(b){a.page=d,a.news=b,a.randFirstNews=c(b.slice(0,5))},null,d)},a.loadPage(a.page)}]),angular.module("websiteApp").directive("tsNewsList",[function(){return{templateUrl:"views/directives/news/newslist.html",restrict:"EACM",replace:!0,scope:{news:"=news"},link:function(){}}}]),angular.module("websiteApp").filter("truncate",[function(){return function(a,b,c){return isNaN(b)&&(b=10),void 0===c&&(c="..."),a.length<=b?a:String(a).substring(0,b-c.length)+c}}]),angular.module("websiteApp").filter("findImage",[function(){var a=screen.width>1200?650:screen.width>992?500:screen.width>550?1800:700,b=280,a=582,c=600,d="/images/site/tooski_bordered.png";return function(e,f,g){var h,i,j=/(((https?:\/\/)|(..\/assets\/uploads\/files\/))[A-Za-z0-9_/\.\-\(\)]*\.(?:png|jpg|svg|jpeg))/gi;return e=j.exec(e),e=e?e[0]:d,j=/res.cloudinary.com/gi,(f||g)&&j.test(e)?(i=e.substring(0,e.lastIndexOf("upload/")+7),h=e.substr(e.lastIndexOf("/")),f?i+"w_"+a+",h_"+b+",c_thumb,g_face"+h:i+"w_"+2*a+",h_"+c+",c_thumb,g_face"+h):(j=/..\/assets\/uploads\/files\//gi,j.test(e)&&(e="http://www.tooski.ch/"+e.substr(3)),e)}}]),angular.module("websiteApp").directive("tsNewsCarousel",["$timeout",function(a){return{templateUrl:"views/directives/news/carousel.html",restrict:"EACM",scope:{news:"="},link:function(b){var c,d=2e3;b.changeNews=function(){var e=b.news.length||1;b.place=(b.place+1)%e,b.current=b.news[b.place],b.cancelChange(),c=a(b.changeNews,d)},a(b.changeNews,d),b.cancelChange=function(){a.cancel(c)},b.place=0,b.$watch("news",function(){b.news&&(b.current=b.news[b.place])}),b.loadNews=function(a){b.place=a,b.current=b.news[a]}}}}]),angular.module("websiteApp").controller("NewsCtrl",["$scope","$routeParams","News",function(a,b,c){var d=b.n;c.getNews(function(b){a.news=b,document.getElementsByTagName("title")[0].innerHTML=b.title},d),a.disqusId="News"+d}]),angular.module("websiteApp").directive("tsPubSide",["Pub",function(a){return{templateUrl:"views/directives/pub/side.html",restrict:"EACM",link:function(b){var c=a.getVerticalBanner(),d=a.getSquareBanner();b.vertical=c[0],b.square1=d[0],b.square2=d.length>1?d[1]:d[0]}}}]),angular.module("websiteApp").directive("tsComments",[function(){return window.disqus_shortname="tooski",{templateUrl:"views/directives/comments/comments.html",restrict:"EACM",link:function(){}}}]),angular.module("websiteApp").factory("News",["$http","Server",function(a,b){var c=b.Url+"apiv1/news/",d=b.Url+"apiv1/mag/";return{getNews:function(b,d,e){var f=d?c+d+"/":c;f=e?f+"?page="+e:f,a.get(f,{cache:!0}).then(function(a){var c=a.data.results?a.data.results:a.data;b(c)})},getMagNews:function(b,c,e){var f=c?d+c+"/":d;f=e?f+"?page="+e:f,a.get(f).then(function(a){var c=a.data.results?a.data.results:a.data;b(c)})}}}]),angular.module("websiteApp").directive("tsNavbar",["$window","Blog","Page","Ranking","Pub",function(a,b,c,d,e){return{templateUrl:"views/directives/core/navbar.html",restrict:"EACM",replace:!0,link:function(a){a.resultsCat={},a.resultsCat.cat=d.getRankingLinks(),a.resultsCat.name="Résultats",b.getBlogLinks(function(b){a.blogsCat={},a.blogsCat.cat=b,a.blogsCat.name="Blogs"}),e.getHorizontalBanner(function(b){a.banner=b[0]}),a.isCollapsed=!0,a.resetSubMenu=function(b){a.revealPills(null,{cat:[{link:"",title:'<img src="images/icons/back-arrow.png" class="icon" style="max-height:22px;margin:0px;padding:0px;" ng-click="$window.history.back()" />'}],name:b})},a.selectNav=function(b){a.activeCat=b},a.selectSubCat=function(b){a.activeSubCat=b},a.revealPills=function(b,c){var d=document.getElementById("ts-nav-subbar");a.selectNav(b),a.currentCat=c,d.style.display=null===c?"none":"block"}}}}]),angular.module("websiteApp").factory("Pub",["$http","Server",function(a,b){var c=b.Url+"apiv1/ads/",d=function(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a};return{getCat:function(e,f){a.get(c+"?category="+e,{cache:!0}).then(function(a){var b=d(a.data);f(b)},b.errorHandler)},getVerticalBanner:function(a){this.getCat("vertical",a)},getHorizontalBanner:function(a){this.getCat("horizontal",a)},getSquareBanner:function(a){this.getCat("square",a)}}}]),angular.module("websiteApp").factory("Blog",["$http","Server",function(a,b){var c,d=b.Url+"apiv1/bloggers/",e="|";return c=function(a){return a.sponsors=a.sponsors.split(e),a.ad=a.ad.split(e),a},{getBlogger:function(e,f){var g=f?d+f+"/":d;a.get(g,{cache:!0}).then(function(a){var b,d=a.data;if(d instanceof Array)for(b=0;b<d.length;b++)d[b]=c(d[b]);else d=c(d);e(d)},b.errorHandler)},getBlogLinks:function(a){this.getBlogger(function(b){var c=b.map(function(a){return a.title=a.name,a.link="Blog?id="+a.id,a});a(c)})},getNews:function(c,e){a.get(d+e+"/posts/",{cache:!0}).then(function(a){c(a.data)},b.errorHandler)}}}]),angular.module("websiteApp").controller("RankingsCtrl",["$scope","$routeParams","Ranking","Result",function(a,b,c,d){var e=b.type;switch(e){case"WC":a.icon="world-cup.png",a.cat="Coupe du Monde";break;case"EC":a.icon="europe-cup.png",a.cat="Coupe d'Europe";break;case"FIS":a.icon="fis.png",a.cat="Courses FIS";break;default:a.icon="ski-icon.png",a.cat="Dernières courses"}a.page=1,a.loadPage=function(b){d.getResultLists(b,e,function(c){a.page=b,a.rankings=c})},a.loadPage(a.page),a.generalRankings={G:{H:c.getGeneralRanking(e,"H"),F:c.getGeneralRanking(e,"F")}},a.currentGeneralCategory="G",a.currentGeneralGenre="H",a.currentGeneralRanking=a.generalRankings[a.currentGeneralCategory][a.currentGeneralGenre],a.$watch("currentGeneralCategory",function(){a.currentGeneralRanking=a.generalRankings[a.currentGeneralCategory][a.currentGeneralGenre]}),a.$watch("currentGeneralGenre",function(){a.currentGeneralRanking=a.generalRankings[a.currentGeneralCategory][a.currentGeneralGenre]})}]),angular.module("websiteApp").controller("BlogCtrl",["$scope","$routeParams","Blog",function(a,b,c){var d=b.id;a.blogId=d,c.getNews(function(b){a.news=b},d),c.getBlogger(function(b){b.name=b.name.trim(),b.profilePic=b.profilePic||"images/site/profile.png",b.sponsors=b.sponsors[0]?b.sponsors:["images/site/tooski.png","http://tooski.ch/assets/images/pub/cbservice.jpg","http://www.tooski.ch/assets/uploads/files/Angulation.png"],b.header=b.header||"http://www.team-schroders.ch/uploads/media/header_img_1d527b.jpg"||"http://pics.ricardostatic.ch/2_728107126_Big/autogramme/loic-meillard-orig-ak.jpg",a.blogger=b},d)}]),angular.module("websiteApp").factory("Page",["$http","Server",function(a,b){var c=b.Url+"apiv1/pages/";return{getPageLinks:function(a){this.getPage(function(b){b=b.map(function(a){return a.link="Page?id="+a.id,a.title=a.name,a}),a(b)})},getPage:function(d,e){var f=e?c+e+"/":c;a.get(f,{cache:!0}).then(function(a){d(a.data)},b.errorHandler)}}}]),angular.module("websiteApp").factory("Ranking",["$http","Server",function(a){var b="/ranking.json",c={men:[],women:[]};a.get(b,{cache:!0}).then(function(a){var b=a.data[0].men,d=a.data[0].women;b&&b.length>=1&&(b=b.map(function(a){return{name:a[1],points:a[3],country:a[2],place:a[0]}}),c.men=b),d&&d.length>=1&&(d=d.map(function(a){return{name:a[1],points:a[3],country:a[2],place:a[0]}}),c.women=d)},function(){console.log("Les classements généraux n'ont pas été publiés.")});var d=[{title:"Coupe du Monde",link:"Rankings?type=WC"},{title:"Coupe d'Europe",link:"Rankings?type=EC"},{title:"FIS",link:"Rankings?type=FIS"}];return{getRankingLinks:function(){return d},getGeneralRanking:function(a,b){return"F"===b?c.women:c.men}}}]),angular.module("websiteApp").controller("PageCtrl",["$scope","$routeParams","Page",function(a,b,c){c.getPage(function(b){a.page=b.content},b.id)}]),angular.module("websiteApp").directive("tsBlogSponsors",["Blog",function(){return{templateUrl:"views/directives/blog/sponsors.html",restrict:"EACM",scope:{sponsors:"=sponsors"},link:function(){}}}]),angular.module("websiteApp").controller("ResultCtrl",["$scope","$routeParams","Result",function(a,b,c){var d=b.resultId;c.getResult(d,function(b){a.cat=b.category,a.discipline=b.discipline,a.info=b.info,a.date=b.date,a.location=b.location,a.link=b.link,a.genre=b.genre,angular.element("#table-content").html(b.table).find("table").addClass("table table-striped table-condensed")})}]),angular.module("websiteApp").directive("tsRankingGeneral",[function(){return{templateUrl:"views/directives/ranking/general.html",restrict:"EACM",scope:{generalRanking:"=ranking"},link:function(){}}}]),angular.module("websiteApp").factory("Result",["$http","Server",function(a,b){var c=b.Url+"apiv1/races/";return{getResult:function(d,e){var f=d?c+d+"/":c;a.get(f,{cache:!0}).then(function(a){a.data.date*=1e3,e(a.data)},b.errorHandler)},getResultLists:function(d,e,f){var g;d=d||1,g=c+"cat/"+e+"/?page="+d,a.get(g,{cache:!0}).then(function(a){var b=a.data.map(function(a){return a.date=1e3*a.date,a});f(b)},b.errorHandler)}}}]),angular.module("websiteApp").service("Server",function(){this.Url="http://tooski.webfactional.com/api/",this.processResponse=function(a){return a.map(function(a){var b=a.fields;return b.id=a.pk,b.date=new Date(b.date).getTime(),b})},this.errorHandler=function(a){console.log("There was a connection problem with the server. ("+a+")")}}),angular.module("websiteApp").directive("tsFooter",["Page","Pub",function(a,b){return{templateUrl:"views/directives/core/footer.html",restrict:"EACM",link:function(c){var d=function(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a};a.getPageLinks(function(a){c.pages=a}),b.getHorizontalBanner(function(a){c.banner=d(a)[0]})}}}]),angular.module("websiteApp").filter("plainText",["$filter",function(a){return function(b,c){return b=String(b).replace(/<[^>]+>|&nbsp;/gm,""),c?a("truncate")(b,c):b}}]),angular.module("websiteApp").directive("tsWidgetBar",["Ranking","Widget","Pub",function(a,b,c){return{templateUrl:"views/directives/core/widgetBar.html",restrict:"EACM",link:function(d){b.get(1,function(a){d.widgetContent=a}),c.getSquareBanner(function(a){d.ads=a.slice(0,2)}),d.$watch("menRanking",function(){d.genRanking=d.menRanking?a.getGeneralRanking(null,"H").slice(0,5):a.getGeneralRanking(null,"F").slice(0,5)})}}}]),angular.module("websiteApp").factory("Widget",["$http","Server",function(a,b){var c=(b.Url+"widgets/",b.Url+"apiv1/widgets/");return{get:function(d,e){var f=c+d+"/";a.get(f,{cache:!0}).then(function(a){e(a.data.content)},b.errorHandler)}}}]),angular.module("websiteApp").filter("titleCase",[function(){return function(a){for(var b=a.split(" "),c=0;c<b.length;c++)b[c]=b[c].toLowerCase(),b[c]=b[c].charAt(0).toUpperCase()+b[c].slice(1);return b.join(" ")}}]),angular.module("websiteApp").factory("Angulation",["Server","$http",function(a,b){var c=a.Url+"apiv1/angulation/";return{getCovers:function(d){var e=c+"covers/";b.get(e,{cache:!0}).then(function(a){d(a.data)},a.errorHandler)}}}]),angular.module("websiteApp").filter("unsafeHtml",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]),angular.module("websiteApp").factory("Skiclubs",["$http","Server",function(a,b){var c=b.Url+"apiv1/skiclubs/";return{get:function(d){a.get(c,{cache:!0}).then(function(a){d(a.data)},b.errorHandler)}}}]),angular.module("websiteApp").controller("SkiclubsCtrl",["$scope","Skiclubs","Widget",function(a,b,c){var d,e=46.3514,f=7.1581;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){e=a.coords.latitude,f=a.coords.longitude,d()}),d=function(){a.map.center={latitude:e,longitude:f}},b.get(function(b){a.skiclubs=b}),c.get(2,function(b){a.widgetContent=b}),a.map={center:{latitude:e,longitude:f},zoom:8,draggable:!0},a.markerClick=function(b){a.currentClub=b,a.$apply()},a.currentClub={title:"",content:"",contact:""}}]),angular.module("websiteApp").controller("ShopCtrl",["$scope","Angulation","Lightbox",function(a,b,c){b.getCovers(function(b){b=b.map(function(a){var b={url:a.url,width:465,height:650};return b}),a.covers=b.reverse()}),a.openLightboxModal=function(b){c.openModal(a.covers,b)}}]);
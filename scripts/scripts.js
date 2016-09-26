"use strict";angular.module("websiteApp",["ngRoute","ngTouch","ngAnimate","ngCookies","ngResource","ngSanitize","ui.bootstrap","ngDisqus","bootstrapLightbox","google-maps"]).config(["$routeProvider","$locationProvider",function(e,n){e.when("/",{templateUrl:"views/index.html",controller:"MainCtrl"}).when("/Mag",{templateUrl:"views/index.html",controller:"MagCtrl"}).when("/News",{templateUrl:"views/news.html",controller:"NewsCtrl"}).when("/Rankings",{templateUrl:"views/rankings.html",controller:"RankingsCtrl"}).when("/Blog",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/Page",{templateUrl:"views/page.html",controller:"PageCtrl"}).when("/Result",{templateUrl:"views/result.html",controller:"ResultCtrl"}).when("/Skiclubs",{templateUrl:"views/skiclubs.html",controller:"SkiclubsCtrl"}).when("/Shop",{templateUrl:"views/shop.html",controller:"ShopCtrl"}).when("/sponsors",{templateUrl:"views/sponsors.html",controller:"SponsorsCtrl"}).otherwise({redirectTo:"/"}),n.html5Mode(!1).hashPrefix("!")}]),angular.module("websiteApp").controller("MainCtrl",["$scope","$routeParams","News","Server",function(e,n,t,r){function a(e){for(var n,t,r=e.length;r;n=Math.floor(Math.random()*r),t=e[--r],e[r]=e[n],e[n]=t);return e}r.sendAnalytics(),e.latestNews=[],e.$watch("page",function(n){t.getNews(function(r){t.getNews(function(n){e.latestNews=r.concat(n)},null,n+2)},null,n+1)}),e.page=1,e.loadPage=function(n){t.getNews(function(t){e.page=n,e.news=t,e.randFirstNews=a(t.slice(0,5))},null,n)},e.loadPage(e.page)}]),angular.module("websiteApp").controller("MagCtrl",["$scope","News","Server",function(e,n,t){function r(e){for(var n,t,r=e.length;r;n=Math.floor(Math.random()*r),t=e[--r],e[r]=e[n],e[n]=t);return e}t.sendAnalytics(),e.latestNews=[],e.$watch("page",function(t){n.getMagNews(function(r){n.getMagNews(function(n){e.latestNews=r.concat(n)},null,t+2)},null,t+1)}),e.page=1,e.loadPage=function(t){n.getMagNews(function(n){e.page=t,e.news=n,e.randFirstNews=r(n.slice(0,5))},null,t)},e.loadPage(e.page)}]),angular.module("websiteApp").directive("tsNewsList",[function(){return{templateUrl:"views/directives/news/newslist.html",restrict:"EACM",replace:!0,scope:{news:"=news"},link:function(e,n,t){}}}]),angular.module("websiteApp").filter("truncate",[function(){return function(e,n,t){return isNaN(n)&&(n=10),void 0===t&&(t="..."),e.length<=n?e:String(e).substring(0,n-t.length)+t}}]),angular.module("websiteApp").filter("findImage",[function(){var e=screen.width>1200?650:screen.width>992?500:screen.width>550?1800:700,n=280,e=582,t=600,r="/images/site/tooski_bordered.png";return function(a,i,o){var l,s,c=/(((https?:\/\/)|(..\/assets\/uploads\/files\/))[A-Za-z0-9_\/\.\-\(\)]*\.(?:png|jpg|svg|jpeg))/gi;return a=c.exec(a),a=a?a[0]:r,c=/res.cloudinary.com/gi,(i||o)&&c.test(a)?(s=a.substring(0,a.lastIndexOf("upload/")+7),l=a.substr(a.lastIndexOf("/")),i?s+"w_"+e+",h_"+n+",c_thumb,g_face"+l:s+"w_"+2*e+",h_"+t+",c_thumb,g_face"+l):(c=/..\/assets\/uploads\/files\//gi,c.test(a)&&(a="http://www.tooski.ch/"+a.substr(3)),a)}}]),angular.module("websiteApp").directive("tsNewsCarousel",["$timeout",function(e){return{templateUrl:"views/directives/news/carousel.html",restrict:"EACM",scope:{news:"="},link:function(n,t,r){var a,i=2e3;n.changeNews=function(){var t=n.news.length||1;n.place=(n.place+1)%t,n.current=n.news[n.place],n.cancelChange(),a=e(n.changeNews,i)},e(n.changeNews,i),n.cancelChange=function(){e.cancel(a)},n.place=0,n.$watch("news",function(){n.news&&(n.current=n.news[n.place])}),n.loadNews=function(e){n.place=e,n.current=n.news[e]}}}}]),angular.module("websiteApp").controller("NewsCtrl",["$scope","$routeParams","News","Server",function(e,n,t,r){var a=n.n;r.sendAnalytics(),t.getNews(function(n){e.news=n,document.getElementsByTagName("title")[0].innerHTML=n.title},a),e.disqusId="News"+a}]),angular.module("websiteApp").directive("tsPubSide",["Pub",function(e){return{templateUrl:"views/directives/pub/side.html",restrict:"EACM",link:function(n,t,r){var a=e.getVerticalBanner(),i=e.getSquareBanner();n.vertical=a[0],n.square1=i[0],n.square2=i.length>1?i[1]:i[0]}}}]),angular.module("websiteApp").directive("tsAdPlaceholder",["$window","Pub",function(e,n){return{templateUrl:"views/directives/core/placeholder.html",restrict:"EACM",replace:!0,scope:{width:"=?minWidth"},link:function(t,r,a){var i=function(e){var e=e;return function(){e>=window.innerWidth?r.css("display","none"):r.css("display","block")}};(i=i(t.width))();n.getPlaceholder(a.placeholder,a.category,function(e){t.ad=e[0],t.cat=a.category});angular.element(e).on("resize",i)}}}]),angular.module("websiteApp").directive("tsComments",[function(){return window.disqus_shortname="tooski",{templateUrl:"views/directives/comments/comments.html",restrict:"EACM",link:function(e,n,t){}}}]),angular.module("websiteApp").factory("News",["$http","Server",function(e,n){var t=n.Url+"apiv1/news/",r=n.Url+"apiv1/mag/";return{getNews:function(n,r,a){var i=r?t+r+"/":t;i=a?i+"?page="+a:i,e.get(i,{cache:!0}).then(function(e){var t=e.data.results?e.data.results:e.data;n(t)})},getMagNews:function(n,t,a){var i=t?r+t+"/":r;i=a?i+"?page="+a:i,e.get(i).then(function(e){var t=e.data.results?e.data.results:e.data;n(t)})}}}]),angular.module("websiteApp").directive("tsNavbar",["$window","Blog","Page","Ranking","Pub",function(e,n,t,r,a){return{templateUrl:"views/directives/core/navbar.html",restrict:"EACM",replace:!0,link:function(e,t,i){var o=function(e){for(var n,t,r=e.length;r;n=Math.floor(Math.random()*r),t=e[--r],e[r]=e[n],e[n]=t);return e};e.resultsCat={},e.resultsCat.cat=r.getRankingLinks(),e.resultsCat.name="Résultats",n.getBlogLinks(function(n){e.blogsCat={},e.blogsCat.cat=n,e.blogsCat.name="Blogs"}),a.getHorizontalBanner(function(n){e.banner=o(n)[0]}),e.isCollapsed=!0,e.resetSubMenu=function(n){e.revealPills(null,{cat:[{link:"",title:'<img src="images/icons/back-arrow.png" class="icon" style="max-height:22px;margin:0px;padding:0px;" ng-click="$window.history.back()" />'}],name:n})},e.selectNav=function(n){e.activeCat=n},e.selectSubCat=function(n){e.activeSubCat=n},e.revealPills=function(n,t){var r=document.getElementById("ts-nav-subbar");e.selectNav(n),e.currentCat=t,r.style.display=null===t?"none":"block"}}}}]),angular.module("websiteApp").factory("Pub",["$http","Server",function(e,n){var t=n.Url+"apiv1/ads/",r=function(e){for(var n,t,r=e.length;r;n=Math.floor(Math.random()*r),t=e[--r],e[r]=e[n],e[n]=t);return e};return{getPlaceholder:function(a,i,o){e.get(t+"?placeholder="+a+"&category="+i,{cache:!0}).then(function(e){var n=r(e.data);o(n)},n.errorHandler)},getCat:function(a,i){e.get(t+"?category="+a,{cache:!0}).then(function(e){var n=r(e.data);i(n)},n.errorHandler)},getVerticalBanner:function(e){this.getCat("vertical",e)},getHorizontalBanner:function(e){this.getCat("horizontal",e)},getSquareBanner:function(e){this.getCat("square",e)}}}]),angular.module("websiteApp").factory("Blog",["$http","Server",function(e,n){var t,r=n.Url+"apiv1/bloggers/",a="|";return t=function(e){return e.sponsors=e.sponsors.split(a),e.ad=e.ad.split(a),e},{getBlogger:function(a,i){var o=i?r+i+"/":r;e.get(o,{cache:!0}).then(function(e){var n,r=e.data;if(r instanceof Array)for(n=0;n<r.length;n++)r[n]=t(r[n]);else r=t(r);a(r)},n.errorHandler)},getBlogLinks:function(e){this.getBlogger(function(n){var t=n.map(function(e){return e.title=e.name,e.link="Blog?id="+e.id,e});e(t)})},getNews:function(t,a){e.get(r+a+"/posts/",{cache:!0}).then(function(e){t(e.data)},n.errorHandler)}}}]),angular.module("websiteApp").controller("RankingsCtrl",["$scope","$routeParams","Ranking","Result","Server",function(e,n,t,r,a){a.sendAnalytics();var i=n.type;switch(i){case"WC":e.icon="world-cup.png",e.cat="Coupe du Monde";break;case"EC":e.icon="europe-cup.png",e.cat="Coupe d'Europe";break;case"FIS":e.icon="fis.png",e.cat="Courses FIS";break;default:e.icon="ski-icon.png",e.cat="Dernières courses"}e.catType=i,e.page=1,e.nb_results=0,e.loadPage=function(n){r.getResultLists(n,i,function(t){e.page=n,e.nb_results+=t.length,"FIS"==i?(e.rankings=t.slice(0,t.length/2),e.rankings2=t.slice(t.length/2)):e.rankings=t})},e.loadPage(e.page),e.generalRankings={overall:{H:t.getGeneralRanking("overall","H"),F:t.getGeneralRanking("overall","F")},downhill:{H:t.getGeneralRanking("downhill","H"),F:t.getGeneralRanking("downhill","F")},slalom:{H:t.getGeneralRanking("slalom","H"),F:t.getGeneralRanking("slalom","F")},"giant-slalom":{H:t.getGeneralRanking("giant-slalom","H"),F:t.getGeneralRanking("giant-slalom","F")},"super-g":{H:t.getGeneralRanking("super-g","H"),F:t.getGeneralRanking("super-g","F")},combined:{H:t.getGeneralRanking("combined","H"),F:t.getGeneralRanking("combined","F")}},e.currentGeneralCategory="overall",e.currentGeneralGenre="H",e.currentGeneralRanking=e.generalRankings[e.currentGeneralCategory][e.currentGeneralGenre],e.$watch("currentGeneralCategory",function(n,t){e.currentGeneralRanking=e.generalRankings[e.currentGeneralCategory][e.currentGeneralGenre]}),e.$watch("currentGeneralGenre",function(n,t){e.currentGeneralRanking=e.generalRankings[e.currentGeneralCategory][e.currentGeneralGenre]})}]),angular.module("websiteApp").controller("BlogCtrl",["$scope","$routeParams","Blog","Server",function(e,n,t,r){var a=n.id;e.blogId=a,r.sendAnalytics(),t.getNews(function(n){e.news=n},a),t.getBlogger(function(n){n.name=n.name.trim(),n.profilePic=n.profilePic||"images/site/profile.png",n.sponsors=n.sponsors[0]?n.sponsors:["images/site/tooski.png","http://tooski.ch/assets/images/pub/cbservice.jpg","http://www.tooski.ch/assets/uploads/files/Angulation.png"],n.header=n.header||"http://www.team-schroders.ch/uploads/media/header_img_1d527b.jpg"||"http://pics.ricardostatic.ch/2_728107126_Big/autogramme/loic-meillard-orig-ak.jpg",e.blogger=n},a)}]),angular.module("websiteApp").factory("Page",["$http","Server",function(e,n){var t=n.Url+"apiv1/pages/";return{getPageLinks:function(e){this.getPage(function(n){n=n.map(function(e){return e.link="Page?id="+e.id,e.title=e.name,e}),e(n)})},getPage:function(r,a){var i=a?t+a+"/":t;e.get(i,{cache:!0}).then(function(e){r(e.data)},n.errorHandler)}}}]),angular.module("websiteApp").factory("Ranking",["$http","Server",function(e,n){var t="/ranking.json",r={men:[],women:[]},a={};e.get(t,{cache:!0}).then(function(e){for(var n=0;n<e.data.length;n++){var t=e.data[n].id,r=e.data[n].men,i=e.data[n].women,o={men:[],women:[]};r&&r.length>=1&&(r=r.map(function(e){return{name:e[1],points:e[3],country:e[2],place:e[0]}}),o.men=r),i&&i.length>=1&&(i=i.map(function(e){return{name:e[1],points:e[3],country:e[2],place:e[0]}}),o.women=i),a[t]=o}},function(){console.log("Les classements généraux n'ont pas été publiés.")});var i=[{title:"Coupe du Monde",link:"Rankings?type=WC"},{title:"Coupe d'Europe",link:"Rankings?type=EC"},{title:"FIS",link:"Rankings?type=FIS"}];return{getRankingLinks:function(){return i},getGeneralRanking:function(e,n){return r=a[e],"F"===n?r.women:r.men}}}]),angular.module("websiteApp").controller("PageCtrl",["$scope","$routeParams","Page","Server",function(e,n,t,r){r.sendAnalytics(),t.getPage(function(n){e.page=n.content},n.id)}]),angular.module("websiteApp").directive("tsBlogSponsors",["Blog",function(e){return{templateUrl:"views/directives/blog/sponsors.html",restrict:"EACM",scope:{sponsors:"=sponsors"},link:function(e,n,t){}}}]),angular.module("websiteApp").controller("ResultCtrl",["$scope","$routeParams","Result","Server",function(e,n,t,r){var a=n.resultId;r.sendAnalytics(),t.getResult(a,function(n){e.cat=n.category,e.discipline=n.discipline,e.info=n.info,e.date=n.date,e.location=n.location,e.link=n.link,e.genre=n.genre,angular.element("#table-content").html(n.table).find("table").addClass("table table-striped table-condensed"),angular.element("#table-content tr").find("th:nth(2)").hide(),angular.element("#table-content tr").find("td:nth(2)").hide()})}]),angular.module("websiteApp").directive("tsRankingGeneral",[function(){return{templateUrl:"views/directives/ranking/general.html",restrict:"EACM",scope:{generalRanking:"=ranking"},link:function(e,n,t){}}}]),angular.module("websiteApp").factory("Result",["$http","Server",function(e,n){var t=n.Url+"apiv1/races/";return{getResult:function(r,a){var i=r?t+r+"/":t;e.get(i,{cache:!0}).then(function(e){e.data.date*=1e3,a(e.data)},n.errorHandler)},getResultLists:function(r,a,i){var o;r=r||1,o=t+"cat/"+a+"/?page="+r,e.get(o,{cache:!0}).then(function(e){var n=e.data.map(function(e){return e.date=1e3*e.date,e});i(n)},n.errorHandler)}}}]),angular.module("websiteApp").service("Server",["$window","$location",function(e,n){this.Url="http://tooski.webfactional.com/api/",this.sendAnalytics=function(){e.ga("send","pageview",{page:n.path()})},this.processResponse=function(e){return e.map(function(e){var n=e.fields;return n.id=e.pk,n.date=new Date(n.date).getTime(),n})},this.errorHandler=function(e,n){console.log("There was a connection problem with the server. ("+e+")")}}]),angular.module("websiteApp").directive("tsFooter",["Page","Pub",function(e,n){return{templateUrl:"views/directives/core/footer.html",restrict:"EACM",link:function(t,r,a){var i=function(e){for(var n,t,r=e.length;r;n=Math.floor(Math.random()*r),t=e[--r],e[r]=e[n],e[n]=t);return e};e.getPageLinks(function(e){t.pages=e}),n.getHorizontalBanner(function(e){t.footerBanner=i(e)[0]})}}}]),angular.module("websiteApp").filter("plainText",["$filter",function(e){return function(n,t,r){return n=String(n).replace(/<[^>]+>|&nbsp;/gm,""),t?e("truncate")(n,t):n}}]),angular.module("websiteApp").directive("tsWidgetBar",["Ranking","Widget","Pub",function(e,n,t){return{templateUrl:"views/directives/core/widgetBar.html",restrict:"EACM",link:function(r,a,i){n.get(1,function(e){r.widgetContent=e}),t.getSquareBanner(function(e){r.ads=e.slice(0,2)}),r.$watch("menRanking",function(){r.menRanking?r.genRanking=e.getGeneralRanking("overall","H").slice(0,5):r.genRanking=e.getGeneralRanking("overall","F").slice(0,5)})}}}]),angular.module("websiteApp").factory("Widget",["$http","Server",function(e,n){var t=(n.Url+"widgets/",n.Url+"apiv1/widgets/");return{get:function(r,a){var i=t+r+"/";e.get(i,{cache:!0}).then(function(e){a(e.data.content)},n.errorHandler)}}}]),angular.module("websiteApp").filter("titleCase",[function(){return function(e){for(var n=e.split(" "),t=0;t<n.length;t++)n[t]=n[t].toLowerCase(),n[t]=n[t].charAt(0).toUpperCase()+n[t].slice(1);return n.join(" ")}}]),angular.module("websiteApp").factory("Angulation",["Server","$http",function(e,n){var t=e.Url+"apiv1/angulation/";return{getCovers:function(r){var a=t+"covers/";n.get(a,{cache:!0}).then(function(e){r(e.data)},e.errorHandler)}}}]),angular.module("websiteApp").filter("unsafeHtml",["$sce",function(e){return function(n){return e.trustAsHtml(n)}}]),angular.module("websiteApp").factory("Skiclubs",["$http","Server",function(e,n){var t=n.Url+"apiv1/skiclubs/";return{get:function(r){e.get(t,{cache:!0}).then(function(e){r(e.data)},n.errorHandler)}}}]),angular.module("websiteApp").controller("SkiclubsCtrl",["$scope","Skiclubs","Widget","Server",function(e,n,t,r){var a,i=46.3514,o=7.1581;r.sendAnalytics(),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){i=e.coords.latitude,o=e.coords.longitude,a()}),a=function(){e.map.center={latitude:i,longitude:o}},n.get(function(n){e.skiclubs=n}),t.get(2,function(n){e.widgetContent=n}),e.map={center:{latitude:i,longitude:o},zoom:8,draggable:!0},e.markerClick=function(n){e.currentClub=n,e.$apply()},e.currentClub={title:"",content:"",contact:""}}]),angular.module("websiteApp").controller("ShopCtrl",["$scope","Angulation","Lightbox","Server",function(e,n,t,r){r.sendAnalytics(),n.getCovers(function(n){n=n.map(function(e,n){var t={url:e.url,width:465,height:650};return t}),e.covers=n.reverse()}),e.openLightboxModal=function(n){t.openModal(e.covers,n)}}]),angular.module("websiteApp").directive("tsSideAds",["$window","Pub",function(e,n){return{templateUrl:"views/directives/core/sideads.html",restrict:"EACM",scope:{width:"=minWidth"},link:function(t,r,a){function i(e){for(var n,t,r=e.length;r;n=Math.floor(Math.random()*r),t=e[--r],e[r]=e[n],e[n]=t);return e}var o=function(e){var e=e;return function(){e>=window.innerWidth?r.css("display","none"):r.css("display","block")}};o=o(t.width),o(),n.getVerticalBanner(function(e){t.ad=i(e)[0]}),angular.element(e).on("resize",o)}}}]),angular.module("websiteApp").controller("SponsorsCtrl",["$scope","Widget",function(e,n){n.get(2,function(n){e.widgetContent=n})}]);
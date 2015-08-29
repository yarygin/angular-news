var site = angular.module('siteRoutes', [
    'ngRoute',
    'newsControllers'
]);
site.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/news', {
                templateUrl: 'partials/news-list.html',
                controller: 'NewsController'
            })
            .when('/news/add', {
                templateUrl: 'partials/news-article-add.html',
                controller: 'ArticleAddController'
            })
            .when('/news/:articleId', {
                templateUrl: 'partials/news-article.html',
                controller: 'ArticleController'
            })
            .when('/news/:articleId/edit', {
                templateUrl: 'partials/news-article-edit.html',
                controller: 'ArticleEditController'
            })
            .otherwise({
                redirectTo: '/news'
            });
    }])
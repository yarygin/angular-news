var site = angular.module('site', [
    'ngRoute',
    'siteControllers',
    'siteFilters',
    'siteServices'
]);

site.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/news', {
            templateUrl: 'partials/news-list.html',
            controller: 'NewsCtrl'
        })
            .when('/news/add', {
                templateUrl: 'partials/article-add.html',
                controller: 'ArticleAddCtrl'
            })
        .when('/news/:articleId', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleCtrl'
        })
        .when('/news/:articleId/edit', {
            templateUrl: 'partials/article-edit.html',
            controller: 'ArticleEditCtrl'
        })
        .otherwise({
            redirectTo: '/news'
        });
    }]);
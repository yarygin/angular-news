var site = angular.module('site', [
    'ngRoute',
    'siteControllers',
    'siteFilters',
    'siteServices'
]);

site.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/news', {
            templateUrl: 'partials/news-list.html',
            controller: 'NewsListCtrl'
        })
        .when('/news/add', {
            templateUrl: 'partials/article-add.html',
            controller: 'AddArticleCtrl'
        })
        .when('/news/:articleId', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleCtrl'
        })
        .when('/news/:articleId/edit', {
            templateUrl: 'partials/article-edit.html',
            controller: 'EditArticleCtrl'
        })
        .otherwise({
            redirectTo: '/news'
        });
    }]);
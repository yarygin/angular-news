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
        .otherwise({
            redirectTo: '/news'
        });
    }]);
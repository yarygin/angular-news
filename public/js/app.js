var site = angular.module('site', [
    'ngRoute',
    'siteControllers',
    'siteFilters',
    'siteServices',
    'loadingStatus'
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
            templateUrl: 'partials/article-add.html',
            controller: 'ArticleAddController'
        })
        .when('/news/:articleId', {
            templateUrl: 'partials/article.html',
            controller: 'ArticleController'
        })
        .when('/news/:articleId/edit', {
            templateUrl: 'partials/article-edit.html',
            controller: 'ArticleEditController'
        })
        .otherwise({
            redirectTo: '/news'
        });
    }])
    .directive('ngDateWidget', function() {
        return {
            restrict: 'AE',
            scope: {
                date:"@"
            },
            templateUrl: '../directives/date-widget.html',
            replace: true
        }
    })
    .directive('ngMessage', function() {
        return {
            restrict: 'E',
            scope: {
                message:"@"
            },
            templateUrl: '../directives/message.html',
            replace: true
        };
    });
var site = angular.module('main.site', [
    'loadingStatus',
    'siteFilters',
    'siteRoutes'
]);

site
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
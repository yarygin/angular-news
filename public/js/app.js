var site = angular.module('main.site', [
        'loadingStatus',
        'siteFilters',
        'siteRoutes'
    ])
    .directive('ngDateWidget', function() {
        return {
            restrict: 'AE',
            scope: {
                "date":"@"
            },
            templateUrl: '../directives/date-widget.html',
            replace: true
        }
    })
    .directive('ngMessage', function() {
        return {
            restrict: 'AE',
            scope: {
                "message":"@",
                "class":"@"
            },
            templateUrl: '../directives/message.html',
            replace: true
        };
    });
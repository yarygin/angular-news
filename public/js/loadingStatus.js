angular.module('loadingStatus', [])

    .config(function($httpProvider) {
        $httpProvider.interceptors.push('loadingStatusInterceptor');
    })

    //.directive('loadingStatusMessage', function() {
    //    return {
    //        link: function($scope, $element, attrs) {
    //            var show = function() {
    //                $element.css('display', 'block');
    //            };
    //            var hide = function() {
    //                $element.css('display', 'none');
    //            };
    //            $scope.$on('loadingStatusActive', show);
    //            $scope.$on('loadingStatusInactive', hide);
    //            hide();
    //        }
    //    };
    //})

    .factory('loadingStatusInterceptor', function($q, $rootScope) {
        return {
            request: function(config) {
                //console.log("request!",config);
                return config || $q.when(config);
            },
            response: function(response) {
                //console.log("response!",response);
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                //console.log("Error!",rejection);
                return $q.reject(rejection);
            }
        };
    });
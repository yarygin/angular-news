angular.module('loadingStatus', [])

    .config(function($httpProvider) {
        $httpProvider.interceptors.push('loadingStatusInterceptor');
    })
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
                console.log("Error!",rejection);
                console.log("scope!",$rootScope);
                $rootScope.message = "ERROR!!!";
                return $q.reject(rejection);
            }
        };
    });
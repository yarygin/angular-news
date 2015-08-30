console.log("here");
var siteServices = angular.module('siteServices', [])
    //// перехват ошибок, ответов и запросов
    //.config(function($httpProvider) {
    //    $httpProvider.interceptors.push('loadingStatusInterceptor');
    //})
    //.factory('loadingStatusInterceptor', function($q, $rootScope) {
    //    return {
    //        request: function(config) {
    //            return config || $q.when(config);
    //        },
    //        response: function(response) {
    //            return response || $q.when(response);
    //        },
    //        responseError: function(rejection) {
    //            return $q.reject(rejection);
    //        }
    //    };
    //})
    .service('messagesService', ['$rootScope', function($rootScope) {
        this.messages = [];
        this.showMessage = function(msg) {
            $rootScope.messages.push({text: msg, class:"alert alert-success"});
        };
    }]);
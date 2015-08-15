var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('News', ['$resource',
    function($resource){
        return $resource('/api/news/:articleId', {}, {
            query: {
                method:'GET',
                isArray:true
            },
            get: {
                method:'GET',
                params: {
                    id:'articleId'
                },
                isArray:false
            }
        });
    }]);
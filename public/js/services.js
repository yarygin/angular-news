var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('News', ['$resource',
    function($resource){
        console.log($resource);
        return $resource('/api/news/:articleId', {}, {
            query: {
                method:'GET', 
                params:{
                    articleId:'news'
                }, 
                isArray:true
            }
        });
    }]);
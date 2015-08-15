var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('Article', ['$resource',
    function($resource){
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
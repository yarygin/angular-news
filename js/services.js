var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('Article', ['$resource',
    function($resource){
        return $resource('data/articles/:articleId.json', {}, {
            query: {
                method:'GET', 
                params:{
                    articleId:'news'
                }, 
                isArray:true
            }
        });
    }]);
var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('News', ['$resource',
    function($resource){
        return $resource('/api/news/:id', {id: '@id'}, {
            query: {
                method:'GET',
                isArray:true
            },
            get: {
                method:'GET',
                isArray:false
            },
            save: {
                method:'POST',
                isArray:false
            },
            update: {
                method:'PUT',
                isArray:false
            },
            delete: {
                method:'DELETE',
                isArray:false
            }
        });
    }]);
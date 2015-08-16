var siteServices = angular.module('siteServices', ['ngResource']);

siteServices.factory('News', ['$resource',
    function($resource){
        return $resource('/api/news/:id', {}, {
            query: {
                method:'GET',
                isArray:true
            },
            get: {
                method:'GET',
                params: {
                    id:'id'
                },
                isArray:false
            },
            save: {
                method:'POST',
                isArray:false
            },
            update: {
                method:'PUT',
                params: {
                    id:'id'
                },
                isArray:false
            },
            delete: {
                method:'DELETE',
                params: {
                    id:'id'
                },
                isArray:false
            }
        });
    }]);
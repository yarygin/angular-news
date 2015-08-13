angular.module('siteFilters', []).filter('strToDate', function() {
  return function(str) {
    return new Date(str);
  };
});
var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NewsListCtrl', ['$scope', 'News', function ($scope, News) {
    $scope.news = News.query();
    $scope.orderNewsDate = '-date';
}]);

siteControllers.controller('ArticleCtrl', ['$scope', 'News', '$routeParams', function ($scope, News, $routeParams) {
    var id = $routeParams.articleId;
    $scope.article = News.get({articleId: id});
    $scope.complain = function(id) {
        alert("Вы пожаловались на новость \""+$scope.article.title+"\"");
    }
}]);
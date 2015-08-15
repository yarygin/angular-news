var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NewsListCtrl', ['$scope', 'Article', function ($scope, Article) {
    // $http.get('/data/news.json').success(function(data) {
    //     $scope.news = data;
    // });
    $scope.news = Article.query();
    $scope.orderNewsDate = '-date';
}]);

siteControllers.controller('ArticleCtrl', ['$scope', 'Article', '$routeParams', function ($scope, Article, $routeParams) {
    var id = $routeParams.articleId;
    $scope.article = Article.get({articleId: id});

    $scope.complain = function(id) {
        alert("Вы пожаловались на новость \""+$scope.article.title+"\"");
    }
}]);
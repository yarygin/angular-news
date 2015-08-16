var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NewsListCtrl', ['$scope', 'News', function ($scope, News) {
    $scope.news = News.query();
    $scope.orderNewsDate = '-date';
}]);

siteControllers.controller('ArticleCtrl', ['$scope', 'News', '$routeParams', function ($scope, News, $routeParams) {
    var id = $routeParams.articleId;
    $scope.article = News.get({articleId: id});
    console.log($scope.article);
    $scope.complain = function(id) {
        alert("Вы пожаловались на новость \""+$scope.article.title+"\"");
    }
}]);

siteControllers.controller('AddArticleCtrl', ['$scope', 'News', function ($scope, News) {
    var article = {
        title:"",
        date:new Date(),
        image:"",
        previewText:"",
        fullText:""
    };
    $scope.article = article;
    $scope.insert = function(article) {
        $scope.result = News.save({body:article});
        console.log($scope.result);
    }
}]);
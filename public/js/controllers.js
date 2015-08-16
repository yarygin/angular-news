var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NewsListCtrl', ['$scope', 'News', function ($scope, News) {
    $scope.news = News.query();
    $scope.orderNewsDate = '-date';
}]);

siteControllers.controller('ArticleCtrl', ['$scope', 'News', '$routeParams', function ($scope, News, $routeParams) {
    var id = $routeParams.articleId;
    News.get({id: id}, function(data){
        $scope.article = data;
    });
    $scope.complain = function(id) {
        alert("Вы пожаловались на новость \""+$scope.article.title+"\"");
    }
    $scope.delete = function(id) {
        News.delete({id: id}, function(data){
            console.log(data);
        });
    }
}]);

siteControllers.controller('EditArticleCtrl', ['$scope', 'News', '$routeParams', function ($scope, News, $routeParams) {
    var id = $routeParams.articleId;
    News.get({id: id}, function(article){
        $scope.article = article;
    });
    $scope.update = function(article) {
        article.id = article._id;
        News.update({id: article._id}, function(data){
            console.log(data);
        });
    }
}]);

siteControllers.controller('AddArticleCtrl', ['$scope', 'News', function ($scope, News) {
    var article = {
        title:"",
        date: new Date(),
        image:"",
        preview:"",
        fulltext:""
    };
    $scope.article = article;
    $scope.insert = function(article) {
        News.save(article, function(article){
            $scope.article = article;
            console.log($scope.article);
        });
    }
}]);
var siteControllers = angular.module('siteControllers', []);

siteControllers.controller('NewsListCtrl', ['$scope', 'News', function ($scope, News) {
    $scope.news = News.query();
    $scope.orderNewsDate = '-date';
}]);

siteControllers.controller('ArticleCtrl', ['$scope', 'News', '$routeParams', '$location', function ($scope, News, $routeParams, $location) {
    var id = $routeParams.articleId;
    $scope.result=false;
    News.get({id: id}, function(data){
        $scope.article = data;
    });
    $scope.complain = function(id) {
        alert("Вы пожаловались на новость \""+$scope.article.title+"\"");
    };
    $scope.delete = function(id) {
        News.delete({id: id}).$promise.then(function(){
                $scope.result=true;
                //setTimeout(function(){
                    $location.path("/news");
                //}, 500);
            },
            function(){
                $scope.result=false;
            }
        );
    };
}]);

siteControllers.controller('EditArticleCtrl', ['$scope', 'News', '$routeParams', function ($scope, News, $routeParams) {
    var id = $routeParams.articleId;
    News.get({id: id}, function(article){
        $scope.article = article;
    });
    $scope.result=false;
    $scope.update = function(article) {
        var newArticle = {
            id:article._id,
            title:article.title,
            date:article.date,
            image:article.image,
            preview:article.preview,
            fulltext:article.fulltext
        };
        News.update(newArticle).$promise.then(function(){
                $scope.result=true;
            },
            function(){
                $scope.result=false;
            }
        );
    };
}]);

siteControllers.controller('AddArticleCtrl', ['$scope', 'News', '$location', function ($scope, News, $location) {
    var article = {
        title:"",
        date: new Date(),
        image:"",
        preview:"",
        fulltext:""
    };
    $scope.article = article;
    $scope.insert = function(article) {
        News.save(article).$promise.then(function(article){
            $scope.article = article;
            //setTimeout(function(){
                $location.path("/news/"+article._id);
                //console.log("added");
            //}, 500);
        });
    };
}]);
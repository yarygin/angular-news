var newsControllers = angular.module('newsControllers', ['newsServices']);

newsControllers
    .controller('NewsController', ['$scope', 'News', '$rootScope', function ($scope, News, $rootScope) {
        $scope.news = News.query();
        $rootScope.message = "ASDF";
    }])
    .controller('ArticleController', ['$scope', 'News', '$routeParams', '$location', function ($scope, News, $routeParams, $location) {
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
                    $location.path("/news");
                },
                function(){
                    $scope.result=false;
                }
            );
        };
    }])
    .controller('ArticleEditController', ['$scope', 'News', '$routeParams', function ($scope, News, $routeParams) {
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
    }])
    .controller('ArticleAddController', ['$scope', 'News', '$location', function ($scope, News, $location) {
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
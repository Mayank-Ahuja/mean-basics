app.factory("serverFactory",function($http){
    var object ={
        getJson:function(scope){
            $http.get('https://www.dropbox.com/s/ftxf2rzt1501zy1/sample.json').success(function(data){
                scope.info = data;
            }).error(function(error){
                scope.info = error;
            })
        }
    }
    return object;
});
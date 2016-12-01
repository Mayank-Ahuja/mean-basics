app.controller("serverController",function($scope,serverFactory){
    serverFactory.getJson($scope);
})